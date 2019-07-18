from sqlalchemy import func
from model import User
from model import Venue
from model import Show
from model import City
from datetime import datetime

from model import connect_to_db, db
from server import app



def load_users(file_user):
   
    User.query.delete()

    for row in (open(file_user)):
        row = row.strip()


        password, user_email, user_fname, user_lname, user_type = row.split(",")

        user = User(password=password, 
                    user_email=user_email, 
                    user_fname=user_fname, 
                    user_lname=user_lname, 
                    user_type=user_type)
                  

       
        db.session.add(user)
        db.session.commit()



def load_venues(file_user):
   
    Venue.query.delete()

    for row in (open(file_user)):
        row = row.strip()

        user_id, venue_name, venue_url, venue_email, venue_address, venue_city, venue_type, venue_show_preferred, venue_backspace, venue_capacity, venue_day_available, venue_time_available, venue_free_rent, venue_rent= row.split(",")

        new_venue = Venue(user_id=user_id,
                      venue_name=venue_name, 
                      venue_url=venue_url,
                      venue_email=venue_email,
                      venue_address=venue_address,
                      venue_city=venue_city,
                      venue_type=venue_type,
                      venue_show_preferred=venue_show_preferred,
                      venue_backspace=venue_backspace,
                      venue_capacity=venue_capacity,
                      venue_day_available=venue_day_available,
                      venue_time_available=venue_time_available,
                      venue_free_rent=venue_free_rent,
                      venue_rent=venue_rent)
               
        db.session.add(new_venue)
        db.session.commit()


 


def load_shows(file_user):
   
    Show.query.delete()

    for row in (open(file_user)):
        row = row.strip()

        user_id, show_name, show_type, show_url, show_amount_people, show_dressing_room, show_length, show_venue_preferred, show_location_preferred, show_day_preferred, show_time_preferred, show_free, show_rent = row.split(",")

        new_show = Show(user_id=user_id,
                  show_name=show_name, 
                  show_type=show_type, 
                  show_url=show_url,
                  show_amount_people=show_amount_people,
                  show_dressing_room=show_dressing_room,
                  show_length=show_length,
                  show_venue_preferred=show_venue_preferred,
                  show_location_preferred=show_location_preferred,
                  show_day_preferred=show_day_preferred,
                  show_time_preferred=show_time_preferred,
                  show_free=show_free, 
                  show_rent=show_rent)
                         
        db.session.add(new_show)
        db.session.commit()



def load_cities(file_user):
   
    City.query.delete()

    for row in (open(file_user)):
        row = row.strip()

        city, county = row.split(",")

        new_city = City(city=city,
                      county=county)
               
        db.session.add(new_city)
        db.session.commit()




def load_days(file_user):
   
    Day.query.delete()

    for row in (open(file_user)):
        row = row.strip()

        user_id, show_name, show_type, show_url, show_amount_people, show_dressing_room, show_length, show_venue_preferred, show_location_preferred, show_day_preferred, show_time_preferred, show_free, show_rent = row.split(",")

        new_show = Show(user_id=user_id,
                  show_name=show_name, 
                  show_type=show_type, 
                  show_url=show_url,
                  show_amount_people=show_amount_people,
                  show_dressing_room=show_dressing_room,
                  show_length=show_length,
                  show_venue_preferred=show_venue_preferred,
                  show_location_preferred=show_location_preferred,
                  show_day_preferred=show_day_preferred,
                  show_time_preferred=show_time_preferred,
                  show_free=show_free, 
                  show_rent=show_rent)
                         
        db.session.add(new_show)
        db.session.commit()












if __name__ == "__main__":
    connect_to_db(app)
    # db.create_all()


load_users("data/user_data.txt")
load_shows("data/show_data.txt")
load_venues("data/venue_data.txt")
load_cities("data/city_data.txt")
load_act("data/act_data.txt")
load_day("data/day_data.txt")
load_time("data/time_data.txt")


  