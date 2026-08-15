from flask import Blueprint, request, jsonify

from models.scheme import Scheme

schemes_bp = Blueprint("schemes", __name__, url_prefix="/api/schemes")


@schemes_bp.route("", methods=["GET"])
def list_schemes():
    category = request.args.get("category")
    q = Scheme.query
    if category:
        q = q.filter(Scheme.category.ilike(f"%{category}%"))
    schemes = q.all()
    return jsonify([s.to_dict() for s in schemes]), 200


@schemes_bp.route("/<int:scheme_id>", methods=["GET"])
def get_scheme(scheme_id):
    scheme = Scheme.query.get(scheme_id)
    if not scheme:
        return jsonify({"error": "Scheme not found"}), 404
    return jsonify(scheme.to_dict()), 200


@schemes_bp.route("/categories", methods=["GET"])
def list_categories():
    rows = Scheme.query.with_entities(Scheme.category).distinct().all()
    categories = sorted({r[0] for r in rows if r[0]})
    return jsonify(categories), 200
