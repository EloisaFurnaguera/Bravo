"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Show, Time, Location


app = Flask(__name__)




shows ={ "rent": {"(1-100)":1, "(101-300)":2, "(301-500)":3, "(500-up)":4},
         "free" : {"yes": 1},
         "tickets": {"(5-10)":1, "(11-20)":2, "(21-40)":3, "(41-up)":4},
         "legh": {"(30-1)":1, "(1-2)":1, "(2-3)":2, "(3-up)":3},
         "backstage": {"yes":1}, 
         "people": {"(1-2)":1, "(3-6)":2, "(7-up)":3},
         "type": {"(stand_up)":1, "spoken_word":1,"improv":3, "music":2, "Ted_talk":2,  
                 "skecks":3, "burlesque":4, "play":4} }   



venues ={ "rent": {"(1-100)":1, "(101-300)":2, "(301-500)":3, "(500-up)":4},

         "free" : {"yes": 1},

         "license ": {"yes": 1},

         "capacity": {"(1-20)":1, "(21-40)":2, "(41-80)":3, "(81-100)":4, "(100-uu)":5 },

         "backstage": {"yes":1}, 

         "people": {"(1-2)":1, "(3-6)":2, "(7-up)":3},

         "type": {"(bar)":1, "cafe":1,"restaurant":3, "night_club":3, "special_event":3,  "theater":4}}   




def ranking_venues(venue_id):

   
    venue = Venue.query.filter_by(venue_id=venue_id).first()

    print(venue)

    # print(venue_info)

    # venue_type_rank = venues.get(venue_info.type, "none")

    # print(venue_type_rank)




    

  






if __name__ == "__main__":


    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    # app.run(host="0.0.0.0")


ranking_venues(1)  

















