"""Models and database functions for project."""

from flask_sqlalchemy import SQLAlchemy

# This is the connection to the PostgreSQL database; we're getting this through
# the Flask-SQLAlchemy helper library. On this, we can find the `session`
# object, where we do most of our interactions (like committing, etc.)

db = SQLAlchemy()

##############################################################################
# Model definitions

class User(db.Model):
    """Users table"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    password = db.Column(db.String(64), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    user_fname = db.Column(db.String(64), nullable=False)
    user_lname = db.Column(db.String(64), nullable=False)
    user_type = db.Column(db.Boolean, nullable=False)

    veneu = db.relationship('Venue')
    act = db.relationship('Act')
    

    def __repr__(self):
        
        return f"<User: user_id={self.user_id} email={self.email} user_type={self.user_type}>"


class Venue(db.Model):
    """Venues table"""

    __tablename__ = "venues"

    venue_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    # user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    venue_name = db.Column(db.String(100), nullable=False)
    venue_address = db.Column(db.String(100), nullable=False)
    venue_zip = db.Column(db.String(10), nullable=False)
    venue_size = db.Column(db.Integer, nullable=False)
    venue_url = db.Column(db.String(200), nullable=True)

    def __repr__(self):
        """Provide helpful representation when printed."""
        return f"<Venue: venue_name={self.venue_name} venue_zip={self.venue_zip}>"





class Act(db.Model):
    """Act table"""

    __tablename__ = "acts"

    act_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    # user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    act_name = db.Column(db.String(100), nullable=False)
    act_url = db.Column(db.String(200), nullable=True)
    act_type = db.Column(db.String(100), nullable=False)


    def __repr__(self):  
        """Provide helpful representation when printed."""
        return f"""<Act: act_name={self.act_name} act_type={self.act_type} >"""


#####################################################################
# Helper functions

def connect_to_db(app):
    """Connect the database to our Flask app."""

    # Configure to use our PostgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///project'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    # As a convenience, if we run this module interactively, it will
    # leave you in a state of being able to work with the database
    # directly.


    from server import app
    connect_to_db(app)
    print("Connected to DB.")
















