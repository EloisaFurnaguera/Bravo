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
    user_type = db.Column(db.String(64), nullable=False)




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
    anywhere = db.Column(db.String(20))
    location_1 = db.Column(db.String(20))
    location_2 = db.Column(db.String(20))
    location_3 = db.Column(db.String(20))
    location_4 = db.Column(db.String(20))
    location_5 = db.Column(db.String(20))
    location_6 = db.Column(db.String(20))
    location_7 = db.Column(db.String(20))
    location_8 = db.Column(db.String(20))
    location_9 = db.Column(db.String(20))
    location_10 = db.Column(db.String(20))
   
    



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
    venue_capacity = db.Column(db.String(100))
    venue_license = db.Column(db.String(100))
    # I AM NOT I SHOULD ASK THE VENUE WHAT KIND OF ACT THEY WANT
    # act_id = db.Column(db.Integer, db.ForeignKey('acts.act_id'))
    # venue_show_preferred = db.Column(db.String(100))
    time_id = db.Column(db.Integer, db.ForeignKey('times.time_id'))
    venue_free_rent = db.Column(db.String(200))
    venue_rent = db.Column(db.String(200))
   




class Show(db.Model):
    """Shows info table"""

    __tablename__ = "shows"

    show_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.user_id'))  
    show_name = db.Column(db.String(100))
    show_type = db.Column(db.String(100))
    show_url = db.Column(db.String(200))
    show_amount_people = db.Column(db.String(200))
    show_dressing_room = db.Column(db.String(200))
    show_length = db.Column(db.String(200))
    # I AM NOT  I SHOULD ASK THE SHOW WHAT KIND OF VENUE THEY WANT
    # show_venue_preferred = db.Column(db.String(200))
    location_id = db.Column(db.Integer, db.ForeignKey('locations.location_id'))
    time_id = db.Column(db.Integer, db.ForeignKey('times.time_id'))
    show_ticket_price = db.Column(db.String(200))
    show_rent = db.Column(db.String(200))







class City(db.Model):
    """Shows Cities table"""

    __tablename__ = "cities"

    city_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    city = db.Column(db.String(100))
    county = db.Column(db.String(100))






#///////////////////////////////////////////////////////////

#I AM NOT SURE I AM GOING TO USE THIS

# NOT SURE I AM GOING TO USE THIS 
# class Act(db.Model):
#     """Shows type od show table"""

#     __tablename__ = "acts"

#     act_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
#     show_id = db.Column(db.Integer, db.ForeignKey('shows.show_id')) 
#     venue_id = db.Column(db.Integer, db.ForeignKey('venues.venue_id'))
#     stand_up = db.Column(db.String(20))
#     burlesque = db.Column(db.String(20))
#     improv = db.Column(db.String(20))
#     music = db.Column(db.String(20))
#     sketch = db.Column(db.String(20))
#     dj = db.Column(db.String(20))
#     spoken_word = db.Column(db.String(20))
    






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
    print("Connected to DB  here.")
















