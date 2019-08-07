"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Show, Time, Location


app = Flask(__name__)




shows ={ "show_rent": {(20, 100):1, (101, 300):2, (301, 400):3, (500, 100000000):4},

         "show_free_rent" : {True: 1, False: 0},

         "tickets": {(5, 10):1, (11, 20):2, (21, 40):3, (41, 10000000):4},

         "show_length": {(1, 2):2, (2, 3):3, (4, 1000000000):4},

         "show_dressing_room": {True:1, False:0},
          
         "show_amount_people": {(1, 2):1, (3, 6):2, (7, 1000000):3},

         "type": {"(stand_up)":1, "spoken_word":1,"improv":3, "music":2, "Ted_talk":2,  
                 "skecks":3, "burlesque":4, "play":4} }   



venues ={ "venue_rent": {(1, 100):1, (101, 300):2, (301, 500):3, (500):4},
         "venue_free_rent": {"yes": 1, "no":0},
         "venue_backspace": {"yes": 3, "no": 0},
         "venue_license": {"yes": 1, "no":0},
         "venue_capacity": {(1-20):1, (21-40):2, (41-80):3, (81-100):4, (100):5 },
         "venue_type": {"bar":1, "cafe":1,"restaurant":3, "night_club":3, "special_event":3, "theater":4}}  


# def get_score(val, dict):
#     # if dict.keys()[0] is a tuple, then call range_score else call direct_score

# def direct_score(val, direct_dict):
#     return direct_dict[val]

# print(direct_score(True, shows["show_free_rent"]))

# def range_score(num, range_dict):
#     for k1, k2 in range_dict:

#         if num >= int(k1) and num <= int(k2):
               
#                 rent = (range_dict[k1, k2])

#                 return rent 


# print(range_score(210, shows["show_rent"]))






def rent (num):
   

    for k1, k2 in shows["show_rent"]:

        if num >= int(k1) and num <= int(k2):
               
                rent = (shows["show_rent"][k1, k2])

                return rent 

          
# print(rent (30))

#THIS NEEDS WORK
def free_show(input):

    return shows["show_free_rent"][input]
       
#print(free_show(True))


def tickets (num):
   

    for k1, k2 in shows["tickets"]:

        if num >= int(k1) and num <= int(k2):
               
                tickets = (shows["tickets"][k1, k2])

                return tickets

          
# print(tickets (30))

def show_length (num):
   

    for k1, k2 in shows["show_length"]:

        if num >= int(k1) and num <= int(k2):
               
                length = (shows["show_length"][k1, k2])

                return length
                
#print(show_length (4))


def show_dressing_room(input):

    return shows["show_free_rent"][input]
       
#print(show_dressing_room(False))


def show_amount_people (num):
   

    for k1, k2 in shows["show_amount_people"]:

        if num >= int(k1) and num <= int(k2):
               
                people = (shows["show_amount_people"][k1, k2])

                return people


# show_amount_people (7)


def show_types(type_show):

    # for show_type in shows["type"]:

        return shows["type"][type_show]
   

print (show_types("burlesque"))









# def ranking_venues(venue_id):

   
#     single_venue_info = Venue.query.filter_by(venue_id=venue_id).first()


#     venue_type = single_venue_info.venue_type
#     venue_backspace = single_venue_info.venue_backspace
#     # venue_capacity = single_venue_info.venue_capacity
#     venue_license = single_venue_info.venue_license
#     venue_free_rent = single_venue_info.venue_free_rent
#     # venue_rent = single_venue_info.venue_rent


#     checking_venue_info = [venue_type, venue_backspace, show_length, venue_license, venue_free_rent]
#                           # venue_rent
#                           # venue_capacity
                      



#     checking_venue_ranking = [venues["venue_type"][venue_type],
#                               venues["venue_backspace"][venue_backspace],
#                               venues["venue_free_rent"][venue_free_rent], 
#                               venues["venue_license"][venue_license]]

#                               # venues["venue_rent"][venue_rent]
#                               # venues["venue_capacity"][venue_capacity],

#     venue_rank =  sum(checking_venue_ranking)

#     return venue_rank

    







# def ranking_show(show_id):


#     single_show_info = Show.query.filter_by(show_id=show_id).first()


#     show_type = single_show_info.show_type
#     show_backspace = single_show_info.show_backspace   
#     show_free_rent = single_show_info.show_free_rent
#     show_ticket_price = single_show_info.show_ticket_price
#     show_length = single_show_info.show_length
#     show_dressing_room = single_show_info.show_dressing_room


#     # show_length = single_show_info.show_length
#     # show_rent = single_show_info.show_rent
#     # show_capacity = single_show_info.show_capacity


#     checking_show_info = [show_type, show_backspace, show_ticket_price,
#                            show_free_rent, show_dressing_room, ]
#                             # show_rent
#                             # show_amount_people
#                             # show_length
#                             # show_amount_people



#     checking_show_ranking = [shows["show_type"][show_type],
#                             shows["show_backspace"][show_backspace],
#                             shows["show_free_rent"][show_free_rent],
#                             shows["show_ticket_price"][show_ticket_price],
#                             shows["show_dressing_room"][show_dressing_room]]
                            
                           
#                             # shows["show_rent"][show_rent],
#                             # shows["show_length"][show_length],
#                             # shows["show_amount_people"][show_amount_people],



#     show_rank =  sum(checking_show_ranking)

#     return show_rank
    




    

  




if __name__ == "__main__":


    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    # app.run(host="0.0.0.0")


# ranking_venues(1)  
# ranking_show(1) 

















