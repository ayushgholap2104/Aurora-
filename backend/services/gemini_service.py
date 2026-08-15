import google.generativeai as genai
from flask import current_app

_model = None


def _get_model():
    global _model
    if _model is None:
        genai.configure(api_key=current_app.config["GEMINI_API_KEY"])
        _model = genai.GenerativeModel("gemini-1.5-flash")
    return _model


def get_scheme_info(query: str, matched_schemes=None) -> str:
    """
    Send the user's question to Gemini, optionally grounded with
    scheme records pulled from MySQL (matched_schemes).
    """
    context = ""
    if matched_schemes:
        context = "Relevant scheme data from our database:\n"
        for s in matched_schemes:
            context += (
                f"- {s.name}: {s.description} "
                f"Eligibility: {s.eligibility}. Benefits: {s.benefits}.\n"
            )

    prompt = f"""
You are Aurora, a helpful assistant that provides accurate information
about Indian Government Schemes, benefits, and services.

{context}

Question: {query}

Answer clearly and concisely. If you used the scheme data above, mention
the scheme name explicitly. If you're unsure, say so rather than guessing.
"""

    model = _get_model()
    response = model.generate_content(prompt)
    return response.text
