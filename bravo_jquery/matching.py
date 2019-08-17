"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Show, Time, Location


app = Flask(__name__)




shows ={ "show_rent": {(20, 100):1, (101, 300):2, (301, 400):3, (500, 100000000):4}, show_rent:100

         "show_free_rent" : {True: 1, False: 0},                                     show_free_rent: True

         "tickets": {(5, 10):1, (11, 20):2, (21, 40):3, (41, 10000000):4},           tickets: 5

         "show_length": {(1, 2):2, (2, 3):3, (4, 1000000000):4},                     show_length:1

         "show_dressing_room": {True:1, False:0},                                    show_dressing_room False
          
         "show_amount_people": {(1, 2):1, (3, 6):2, (7, 1000000):3},                 show_amount_people: 2            

         "type": {"stand_up":1, "spoken_word":1,"improv":3, "music":2, "Ted_talk":2,  type: inprov
                 "skecks":3, "burlesque":4, "play":4} }   



venues ={ "venue_rent": {(1, 100):1, (101, 300):2, (301, 500):3, (500, 10000000):4},

         "venue_free_rent": {True: 1, False: 0},
         
         "venue_backspace": {True: 3, False: 0},

         
         "venue_license": {True: 3, False: 0},

         
         "venue_capacity": {(1, 20):1, (21, 40):2, (41, 80):3, (81, 100):4, (100, 10000000):5 },

         "venue_type": {"bar":1, "cafe":1,"restaurant":3, "night_club":3, "special_event":3, "theater":4}}  




     




# def range_score(num, tuple_range):

#     for k1, k2 in tuple_range:

#         if num >= int(k1) and num <= int(k2):
               
#                 score = (tuple_range[k1, k2])

#                 print(score)

#                 return score 






def trying1(list_val):
    print("I am Boolean")
    print(list_val)

def trying2(list_val):
    print("I am Boolean")
    print(list_val)

def trying3(list_val):
    print("I am not a tuple or a Boolean")
    print(list_val)





def get_(dict_val, dict_key):

    for key_dict in dict:    
        for ind_key in dict[key_dict]:  

            if type(ind_key) is tuple:
                trying1(list_val)
                break


            elif type(ind_key) is bool:
              
                trying2(list_val)
                break
             
            else: 
           
                trying3(list_val)
                break


            

get_ranking(user_dict, shows)








# def get_ranking(list_val, dict):

#     for key_dict in dict:    
#         for ind_key in dict[key_dict]:  

#             if type(ind_key) is tuple:
                
#                 trying1(list_val)
#                 break

#             elif type(ind_key) is bool:
              
#                 trying2(list_val)
#                 break
             
#             else: 
           
#                 trying3(list_val)
#                 break











def range_score(num, range_dict):
    for k1, k2 in range_dict:

        if num >= int(k1) and num <= int(k2):
               
                rent = (range_dict[k1, k2])

                return rent 







        # print(val_dict)
        # for ind_key, ind_val in val_dict.items():
        #     if type(ind_key) is  tuple:
        #         print(ind_key)
        #         print("YESSS")
        #     else:
        #         print("Nooooo")




    # for key_dict, val_dict in dict.items():
    #     print(val_dict)
    #     for ind_key, ind_val in val_dict.items():
    #         if type(ind_key) is  tuple:
    #             print(ind_key)
    #             print("YESSS")
    #         else:
    #             print("Nooooo")

            
    

    # for key in dict:
    #     print(dict[key])
        

            # if type(k) is tuple:
            #     print ("YESSS")
            # else:
            #     print("NOOOOO")


        # else:
        #     print("NOOO")
        
    

# def direct_score(val, direct_dict):
#     return direct_dict[val]

# print(direct_score(True, shows["show_free_rent"]))

# def range_score(num, range_dict):
#     for k1, k2 in range_dict:

#         if num >= int(k1) and num <= int(k2):
               
#                 rent = (range_dict[k1, k2])

#                 return rent 


# print(get_ranking(210, shows))




































# def get_ranking(val, dict):



    
#     # if dict.keys()[0] is a tuple, then call range_score else call direct_score

# def direct_score(val, direct_dict):
#     return direct_dict[val]

# print(direct_score(True, shows["show_free_rent"]))

#


 # def range_score(num, range_dict):
#     for k1, k2 in range_dict:

#         if num >= int(k1) and num <= int(k2):
               
#                 rent = (range_dict[k1, k2])

#                 return rent 


# print(range_score(210, shows["show_rent"]))






def show_rent (num):
   

    for k1, k2 in shows["show_rent"]:

        if num >= int(k1) and num <= int(k2):
               
                rent = (shows["show_rent"][k1, k2])

                return rent 

          
# print(show_rent (30))

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
   

# print (show_types("burlesque"))











def venue_rent (num):
   

    for k1, k2 in venues["venue_rent"]:

        if num >= int(k1) and num <= int(k2):
               
                rent = (venues["venue_rent"][k1, k2])

                return rent 


# print(venue_rent (540))


def free_venue(input):

    return venues["venue_free_rent"][input]
       
# print(free_venue(False))




def venue_backspace(input):

    return venues["venue_backspace"][input]
       
# print(venue_backspace(True))





def venue_license(input):

    return venues["venue_license"][input]

       
# print(venue_license(True))






def venue_capacity(num):
   

    for k1, k2 in venues["venue_capacity"]:

        if num >= int(k1) and num <= int(k2):
               
                capacity = (venues["venue_capacity"][k1, k2])

                return capacity 


# print(venue_capacity(40))




def venue_types(type_venue):

    # for show_type in shows["type"]:

        return venues["venue_type"][type_venue]
   

# print (venue_types("theater"))










  




if __name__ == "__main__":


    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    # app.run(host="0.0.0.0")



















