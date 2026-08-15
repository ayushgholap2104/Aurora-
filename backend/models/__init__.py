from flask_sqlalchemy import SQLAlchemy

# Single shared db instance, imported by app.py and every model file.
db = SQLAlchemy()

# Import models so they register with SQLAlchemy metadata
from .user import User          # noqa: E402,F401
from .scheme import Scheme       # noqa: E402,F401
from .chat_history import ChatHistory  # noqa: E402,F401
