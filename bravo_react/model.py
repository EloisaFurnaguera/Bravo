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
    user_email = db.Column(db.String(100), nullable=False)
    user_fname = db.Column(db.String(64), nullable=False)
    user_lname = db.Column(db.String(64), nullable=False)
    user_type = db.Column(db.String(10), nullable=False)




class Time(db.Model):
    """Shows available times table"""

    __tablename__ = "times"

    time_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    monday = db.Column(db.String(20))
    tuesday = db.Column(db.String(20))
    wednesday = db.Column(db.String(20))
    thursday = db.Column(db.String(20))
    friday = db.Column(db.String(20))
    saturday = db.Column(db.String(20))
    sunday = db.Column(db.String(20))
    morning = db.Column(db.String(20))
    late_morning = db.Column(db.String(20))
    early_night = db.Column(db.String(20))
    late_night = db.Column(db.String(20))




class Location(db.Model):


    __tablename__ = "locations"

    location_id = db.Column(db.Integer, autoincrement=True, primary_key=True)  
    berkeley = db.Column(db.String(20))
    burlingame = db.Column(db.String(20))
    daly_city = db.Column(db.String(20))
    dublin = db.Column(db.String(20))
    emeryville = db.Column(db.String(20))
    palo_alto = db.Column(db.String(20))
    san_francisco = db.Column(db.String(20))
    san_jose = db.Column(db.String(20))
    santa_clara = db.Column(db.String(20))
    sunnyvale = db.Column(db.String(20))
   
    



class Venue(db.Model):
    """Venues table"""

    __tablename__ = "venues"

    venue_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))
    venue_name = db.Column(db.String(100))
    venue_url = db.Column(db.String(200))
    venue_email = db.Column(db.String(100))
    venue_address = db.Column(db.String(100))
    venue_city = db.Column(db.String(100))
    venue_type = db.Column(db.String(100))
    venue_backspace = db.Column(db.String(200))
    venue_capacity = db.Column(db.String(50))
    venue_license = db.Column(db.String(100))
    time_id = db.Column(db.Integer, db.ForeignKey('times.time_id'))
    venue_free_rent = db.Column(db.String(50))
    venue_rent = db.Column(db.String(20))
    venue_ranking = db.Column(db.Integer)
   




class Show(db.Model):
    """Shows info table"""

    __tablename__ = "shows"

    show_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))  
    show_name = db.Column(db.String(100))
    show_type = db.Column(db.String(100))
    show_url = db.Column(db.String(200))
    show_amount_people = db.Column(db.Integer)
    show_dressing_room = db.Column(db.String(200))
    show_length = db.Column(db.String(200))
    location_id = db.Column(db.Integer, db.ForeignKey('locations.location_id'))
    time_id = db.Column(db.Integer, db.ForeignKey('times.time_id'))
    show_ticket_price = db.Column(db.String(50))
    show_rent = db.Column(db.String(20))
    show_ranking = db.Column(db.Integer)







class City(db.Model):
    """Shows Cities table"""

    __tablename__ = "cities"

    city_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    city = db.Column(db.String(100))
    county = db.Column(db.String(100))








#####################################################################
# Helper functions

def connect_to_db(app):
    """Connect the database to our Flask app."""

    # Configure to use our PostgreSQL database
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///bravo'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    # As a convenience, if we run this module interactively, it will
    # leave you in a state of being able to work with the database
    # directly.


    from server import app
    connect_to_db(app)
    print("Connected to DB  here.")
















