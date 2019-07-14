from sqlalchemy import func
from model import User
from model import Venue
from model import Act
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

 


def load_act(file_user):
   
    Act.query.delete()

    for row in (open(file_user)):
        row = row.strip()

        user_id, act_name, act_url, act_type  = row.split(",")

        new_act = Act(user_id=user_id,
                  act_name=act_name, 
                  act_url=act_url, 
                  act_type=act_type)
                         
        db.session.add(new_act)
        db.session.commit()




def load_venue(file_user):
   
    Venue.query.delete()

    for row in (open(file_user)):
        row = row.strip()

        user_id, venue_name, venue_address, venue_city, venue_zipcode, venue_size, v_email, venue_url = row.split(",")

        new_venue = Venue(user_id=user_id,
                      venue_name=venue_name, 
                      venue_address=venue_address, 
                      venue_city=venue_city,
                      venue_zipcode=venue_zipcode,
                      venue_size=venue_size,
                      v_email=v_email,
                      venue_url=venue_url)


               
        db.session.add(new_venue)
        db.session.commit()




if __name__ == "__main__":
    connect_to_db(app)
    # db.create_all()


load_users("data/user_data.txt")
load_act("data/act_data.txt")
load_venue("data/venue_data.txt")

  