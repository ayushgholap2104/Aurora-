from flask import Blueprint, request, jsonify

from models import db
from models.scheme import Scheme
from models.chat_history import ChatHistory
from services.gemini_service import get_scheme_info

chat_bp = Blueprint("chat", __name__, url_prefix="/api/chat")


@chat_bp.route("", methods=["POST"])
def chat():
    data = request.get_json(silent=True) or {}
    query = (data.get("message") or "").strip()

    if not query:
        return jsonify({"error": "message is required"}), 400

    # naive keyword match against scheme names/categories.
    # Swap this later for a proper search (full-text index, embeddings, etc.)
    matched_schemes = Scheme.query.filter(
        Scheme.name.ilike(f"%{query}%") | Scheme.category.ilike(f"%{query}%")
    ).limit(3).all()

    answer = get_scheme_info(query, matched_schemes)

    # optional: log to chat_history (user_id left null for anonymous users)
    entry = ChatHistory(query=query, response=answer)
    db.session.add(entry)
    db.session.commit()

    return jsonify({
        "response": answer,
        "sources": [s.to_dict() for s in matched_schemes],
    }), 200
