from . import db


class Scheme(db.Model):
    __tablename__ = "schemes"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), nullable=False)
    category = db.Column(db.String(100))          # e.g. Agriculture, Health, Education
    description = db.Column(db.Text)
    eligibility = db.Column(db.Text)
    benefits = db.Column(db.Text)
    documents_required = db.Column(db.Text)
    how_to_apply = db.Column(db.Text)
    official_link = db.Column(db.String(300))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category,
            "description": self.description,
            "eligibility": self.eligibility,
            "benefits": self.benefits,
            "documents_required": self.documents_required,
            "how_to_apply": self.how_to_apply,
            "official_link": self.official_link,
        }
