"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Show, Time, Location


app = Flask(__name__)




user_show_chooses = {"show_rent": 100, 
                     "show_free_rent": True, 
                     "tickets": 5, "show_length":1, 
                     "show_dressing_room": False, 
                     "show_amount_people": 2 , 
                     "show_type": "inprov"}



# user_venue_chooses = { "venue_rent": 500, 
#                        "venue_free_rent": False,        
#                        "venue_backspace": False,       
#                        "venue_license": False,       
#                        "venue_capacity": 20,
#                         "venue_type": "bar"}


    


shows ={ "show_rent": {(20, 100):1, (101, 300):2, (301, 400):3, (500, 100000000):4}, 
         "show_free_rent" : {True: 1, False: 0},                                    
         "tickets": {(5, 10):1, (11, 20):2, (21, 40):3, (41, 10000000):4},  
         "show_length": {(1, 2):2, (2, 3):3, (4, 1000000000):4},   
         "show_dressing_room": {True:1, False:0},                                            
         "show_amount_people": {(1, 2):1, (3, 6):2, (7, 1000000):3},                           
         "show_type": {"stand_up":1, "spoken_word":1,"improv":3, "music":2, "Ted_talk":2,  
                       "skecks":3, "burlesque":4, "play":4} }   



venues ={ "venue_rent": {(1, 100):1, (101, 300):2, (301, 500):3, (500, 10000000):4},
         "venue_free_rent": {True: 1, False: 0},        
         "venue_backspace": {True: 3, False: 0} 
         "venue_license": {True: 3, False: 0},
         "venue_capacity": {(1, 20):1, (21, 40):2, (41, 80):3, (81, 100):4, (100, 10000000):5 },
         "venue_type": {"bar":1, "cafe":1,"restaurant":3, "night_club":3, "special_event":3, "theater":4}}  




     


def get_ranking(user_dict, big_dict):

    overall_score = 0

    for (big_dict_key, big_dict_line) in big_dict.items():  

        user_value = user_dict[big_dict_key] 
   
        #because the key for both dict are the same (user_dict_key = big_dict_key) 
        #The user_dict[big_dict_key] is the value from the user dict ("show_rent": 100)

        score_for_big_dict_line = get_ranking_for_criteria(user_value, big_dict_line) 

        overall_score += score_for_big_dict_line


    return overall_score





def get_ranking_for_criteria(user_value, big_dict_line):

    for key in big_dict_line: 

        if type(key) is tuple:
            return get_range_value(user_value, big_dict_line)
           
        elif type(key) is bool:         
            return get_boolean_value(user_value, big_dict_line)
                     
        else:       
            return get_string_value(user_value, big_dict_line)
       





def get_range_value(user_value, big_dict_line):


    for k1, k2 in big_dict_line:
        if user_value >= int(k1) and user_value <= int(k2):    
            tuple_val = (big_dict_line[k1, k2])

            return tuple_val 



def get_boolean_value(user_value, big_dict_line):

    return big_dict_line[user_value]



def get_string_value(user_value, big_dict_line):

        return big_dict_line[user_value]






# print(get_ranking(user_show_chooses, big_dict))
# print(get_ranking(user_show_chooses, shows))
# print(get_ranking(user_venue_chooses , venues))









  




if __name__ == "__main__":


    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    # app.run(host="0.0.0.0")



















