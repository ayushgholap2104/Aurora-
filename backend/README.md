# Aurora Backend (Flask)

## Structure
```
backend/
├── app.py                  # Flask entry point, registers blueprints, creates tables
├── config.py                # Loads settings from .env
├── requirements.txt
├── .env.example              # copy to .env and fill in your real values
├── models/
│   ├── __init__.py          # shared `db` SQLAlchemy instance
│   ├── user.py               # User table (signup/login)
│   ├── scheme.py             # Scheme table (name, eligibility, benefits, etc.)
│   └── chat_history.py       # Logs every question + answer
├── routes/
│   ├── auth.py                # /api/auth/signup, /login, /me
│   ├── chat.py                 # /api/chat  -> Gemini + MySQL lookup
│   └── schemes.py               # /api/schemes  -> list/browse schemes
├── services/
│   └── gemini_service.py       # wraps the Gemini API call
└── utils/
    └── auth_utils.py            # JWT create/verify + @token_required decorator
```

## Setup

1. Create a MySQL database:
   ```sql
   CREATE DATABASE aurora_db;
   ```

2. Copy `.env.example` to `.env` and fill in:
   - your MySQL password
   - your Gemini API key (from https://aistudio.google.com/apikey)
   - random secret strings for FLASK_SECRET_KEY / JWT_SECRET_KEY

3. Install dependencies:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate      # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

4. Run it:
   ```bash
   python app.py
   ```
   This creates the tables on first run and starts the API on `http://localhost:5000`.

## Endpoints so far

| Method | Endpoint                | Purpose                                |
|--------|--------------------------|-----------------------------------------|
| POST   | /api/auth/signup         | matches Signup.jsx form (name, email, password) |
| POST   | /api/auth/login          | matches Login.jsx form (email, password) |
| GET    | /api/auth/me             | get current user (needs Bearer token)   |
| POST   | /api/chat                | send a question, get Gemini's answer + matched scheme sources |
| GET    | /api/schemes             | list all schemes (optional ?category=)  |
| GET    | /api/schemes/<id>        | get one scheme                          |
| GET    | /api/schemes/categories  | list distinct categories                |
| GET    | /api/health              | sanity check                            |

## Connecting the frontend

In `aurora_ui`, the Signup form's `onSubmit` should POST to:
`http://localhost:5000/api/auth/signup`
with body `{ username, email, password }` — currently the form has no submit handler wired up yet, that's the next frontend task for your teammate.

## Not built yet (next steps)
- Seeding the `schemes` table with real scheme data (PM Kisan, Ayushman Bharat, etc.)
- Password reset / email verification
- Rate limiting on the /api/chat endpoint
- Better scheme search (right now it's a simple SQL `LIKE` match, not semantic search)
