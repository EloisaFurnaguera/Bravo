
from flask import Flask, render_template, request, flash, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Show, Time, Location


app = Flask(__name__)

app.secret_key = "mama"


show_ranking_dict ={ "show_rent": {(0, 0):1, (10, 40):1, (50, 100):2, (101, 200):3, (201, 300):4, (301, 400):5, (401, 500):6, (600, 1000):7}, 
                     "show_ticket_price": {(0, 0):1, (0, 10):1, (11, 20):2, (21, 30):3, (31, 40):4, (50, 1000):5},  
                     "show_length": {(1, 2):2, (2, 3):3, (4, 10):4},   
                     "show_dressing_room": {True:2, False:1, "yes":2, "no":1, "Yes":2, "No":1},                                            
                     "show_amount_people": {(1, 2):1, (3, 6):2, (7, 1000000):3},                           
                     "show_type": {"Stand up":1, "Spoken Word":1,"Improv":3, "Music":2, "Ted Talk":2,  
                                   "Sketch Comedy":3, "Burlesque":4, "Play":4} }   

venue_ranking_dict ={"venue_rent": {(0, 0):1, (10, 50):1, (51, 100):2, (101, 200):3, (201, 300):4, (301, 400):5, (401, 500):6,(501, 1000):7},      
                     "venue_backspace": {True:2, False:1, "yes":2, "no":1, "Yes":2, "No":1}, 
                     "venue_license": {True:2, False:1, "yes":2, "no":1, "Yes":2, "No":1},
                     "venue_capacity": {(1, 20):1, (21, 40):2, (41, 80):3, (81, 100):4, (100, 1000):5 },
                     "venue_type": {"Bar":1, "Cafe":1,"Restaurant":2, "Night Club":3, "Hall":5, "Special Event":3, "Theater":4, "Other":4}}  


def adding_ranking(user_type, type_id):

    if user_type == "venue":

        user_venue_chooses = {}

        ranking_dict = venue_ranking_dict

        venue_info = Venue.query.filter_by(venue_id=type_id).first()

        user_venue_chooses["venue_rent"] = venue_info.venue_rent
        user_venue_chooses["venue_backspace"] = venue_info.venue_backspace
        user_venue_chooses["venue_license"] = venue_info.venue_license
        user_venue_chooses["venue_capacity"] = venue_info.venue_capacity
        user_venue_chooses["venue_type"] = venue_info.venue_type

        venue_score = get_ranking(user_venue_chooses , ranking_dict) 

        venue_info.venue_ranking = venue_score

        db.session.commit()

    else:

        user_show_chooses = {}

        ranking_dict = show_ranking_dict

        show_info = Show.query.filter_by(show_id=type_id).first()

        user_show_chooses["show_rent"] = int(show_info.show_rent)
        user_show_chooses["show_ticket_price"] = show_info.show_ticket_price
        user_show_chooses["show_length"] = show_info.show_length
        user_show_chooses["show_dressing_room"] = show_info.show_dressing_room
        user_show_chooses["show_amount_people"] = show_info.show_amount_people
        user_show_chooses["show_type"] = show_info.show_type
   
        show_score = get_ranking(user_show_chooses, ranking_dict) 

        show_info.show_ranking = show_score

        db.session.commit()


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

        if int(user_value) >= int(k1) and int(user_value) <= int(k2): 

            tuple_val = (big_dict_line[k1, k2])

            return tuple_val 

def get_boolean_value(user_value, big_dict_line):

    return big_dict_line[user_value]


def get_string_value(user_value, big_dict_line):
  
    return big_dict_line[user_value]



@app.route("/")
def homepage():
    """Homepage with login form"""     
    return render_template("base.html")


@app.route("/login", methods=['POST'])
def login_process():
    """Process login info"""
    
    user_email = request.json.get("email")
    password_user = request.json.get("password")
    user_type = request.json.get("user_type") 

    #search if user is already in the data and that enter the
    #right user name, pass and type of user
    user = User.query.filter_by(user_email=user_email).first()



    if not user:  
        return jsonify("No_such_user")

    if user.password != password_user: 
        return jsonify("Incorrect_Password")


    if user.user_type != user_type:
        return jsonify("Incorrect_user_type")
    #if the user is a producer go to the producer's page and save the user id in a session.
    if user_type == "producer":
        # check_producer= Show.query.filter_by(user_id=user.user_id).all()     
        session["user_id"] = user.user_id

        return jsonify(user.user_id) 
    #if venue go to the venue page and if new venue send no register note
    if user_type == "venue":

        check_venue_info = Venue.query.filter_by(user_id=user.user_id).first()

        if check_venue_info == None:
            return jsonify("Register_Venue")
        else:
                session["user_id"] = user.user_id
                session["venue_id"] = check_venue_info.venue_id

                return jsonify(user.user_id)


@app.route("/logout",  methods=["POST"])
def logout():
    """Log out and delete the cookies"""
    session.clear()  

    return jsonify("logout")


@app.route("/register", methods=["POST"])
def register_process():
    """Register process"""
    #get user info

    fname = request.json.get("fname")
    lname = request.json.get("lname")
    user_email = request.json.get("email")
    password = request.json.get("password")
    user_type = request.json.get("user_type")   

    if not all([user_type, fname, lname, user_email, password]):
        return jsonify("Please complete the form"), 400
    else:

        #check if email already in the database
        check_email = User.query.filter_by(user_email=user_email).first()

        if not check_email:

            new_user = User(password=password, 
                            user_email=user_email, 
                            user_fname=fname, 
                            user_lname=lname, 
                            user_type=user_type)

            db.session.add(new_user)
            db.session.commit()
            db.session.refresh(new_user) 

            session["user_id"] = new_user.user_id
         
            return jsonify(user_id=new_user.user_id,
                           user_fname=new_user.user_fname,
                           email=new_user.user_email,
                           user_type=new_user.user_type)     
        
        return jsonify("Email_already_in_data"), 400
      

@app.route("/user_info_update", methods=["POST"])
def user_info_update_process():

    user_id = session.get("user_id")

    fname = request.json.get("fname")
    lname = request.json.get("lname")
    email = request.json.get("email")
    password = request.json.get("password")

    find_user = User.query.filter_by(user_id=user_id).first()

    find_user.user_fname = fname 
    find_user.user_lname = lname
    find_user.user_email = email
    find_user.user_password = password 

    db.session.commit()
 
    return jsonify(user_fname=fname, 
                   user_lname=lname,
                   user_email=email)
             

@app.route("/register_venue", methods=["POST"])
def venue_page_process():
    """Process new venue"""
    user_id = session.get("user_id")

    user = User.query.filter_by(user_id=user_id).first()

    
    monday = request.json.get("monday")
    tuesday = request.json.get("tuesday")
    wednesday = request.json.get("wednesday")
    thursday = request.json.get("thursday")
    friday = request.json.get("friday")
    saturday = request.json.get("saturday")
    sunday = request.json.get("sunday")
    morning = request.json.get("morning")
    late_morning = request.json.get("late_morning")
    early_night = request.json.get("early_night")
    late_night = request.json.get("late_night")
    venue_name = request.json.get("venue_name")
    venue_url = request.json.get("venue_url")
    venue_email = request.json.get("venue_email")
    venue_address = request.json.get("venue_address")
    venue_city = request.json.get("venue_city")
    venue_type = request.json.get("venue_type") 
    venue_backspace = request.json.get("venue_backspace")  
    venue_capacity = request.json.get("venue_capacity")
    venue_license = request.json.get("venue_license") 
    venue_rent = request.json.get("venue_rent")

    check_venue_info = Venue.query.filter_by(venue_address=venue_address).first()

    if check_venue_info:

        return jsonify("venue_already_register")

    else:

        new_time = Time(monday=monday,
                        tuesday=tuesday,
                        wednesday=wednesday,
                        thursday=thursday,
                        friday=friday,
                        saturday=saturday,
                        sunday=sunday,
                        morning=morning,
                        late_morning=late_morning,
                        early_night=early_night,
                        late_night=late_night)

        db.session.add(new_time)
        db.session.commit()
        db.session.refresh(new_time)

        new_venue = Venue(user_id=user_id,
                        venue_name=venue_name,
                        venue_url=venue_url, 
                        venue_email=venue_email, 
                        venue_address=venue_address, 
                        venue_city=venue_city,
                        venue_type=venue_type,
                        venue_backspace=venue_backspace,
                        venue_capacity=venue_capacity,
                        venue_license=venue_license,
                        time_id=new_time.time_id,
                        venue_rent=venue_rent)

        db.session.add(new_venue)
        db.session.commit()
        db.session.refresh(new_venue)

        venue_rarking = adding_ranking("venue", new_venue.venue_id)

        return jsonify(time_id=new_time.time_id,
                        monday=new_time.monday,
                        tuesday=new_time.tuesday,
                        wednesday=new_time.wednesday,
                        thursday=new_time.thursday,
                        friday=new_time.friday,
                        saturday=new_time.saturday,
                        sunday=new_time.sunday,
                        morning=new_time.morning,
                        late_morning=new_time.late_morning,
                        early_night=new_time.early_night,
                        late_night=new_time.late_night,
                        venue_id=new_venue.venue_id,
                        venue_name=new_venue.venue_name,
                        venue_url=new_venue.venue_url, 
                        venue_email=new_venue.venue_email, 
                        venue_address=new_venue.venue_address, 
                        venue_city=new_venue.venue_city,
                        venue_type=new_venue.venue_type,
                        venue_backspace=new_venue.venue_backspace,
                        venue_capacity=new_venue.venue_capacity,
                        venue_license=new_venue.venue_license,
                        venue_rent=new_venue.venue_rent)


@app.route("/venue_page", methods=["POST"])
def single_venue_info():

    user_id = session.get("user_id")
    venue_id = session.get("venue_id")

    if venue_id:
        user = User.query.filter_by(user_id=user_id).first()
        venue = Venue.query.filter_by(venue_id=venue_id).first()
        time = Time.query.filter_by(time_id=venue.time_id).first()
    else:
        user = User.query.filter_by(user_id=user_id).first()
        venue = Venue.query.filter_by(user_id=user_id).first()
        time = Time.query.filter_by(time_id=venue.time_id).first()


    return jsonify( user_id=user.user_id,
                    user_email=user.user_email, 
                    user_fname=user.user_fname, 
                    user_lname=user.user_lname,                      
                    monday=time.monday,
                    tuesday=time.tuesday,
                    wednesday=time.wednesday,
                    thursday=time.thursday,
                    friday=time.friday,
                    saturday=time.saturday,
                    sunday=time.sunday,
                    morning=time.morning,
                    late_morning=time.late_morning,
                    early_night=time.early_night,
                    late_night=time.late_night,
                    venue_id=venue.venue_id,
                    venue_name=venue.venue_name,
                    venue_url=venue.venue_url, 
                    venue_email=venue.venue_email, 
                    venue_address=venue.venue_address, 
                    venue_city=venue.venue_city,
                    venue_backspace=venue.venue_backspace,
                    venue_capacity=venue.venue_capacity,
                    venue_license=venue.venue_license,
                    venue_type=venue.venue_type,
                    venue_rent=venue.venue_rent)



@app.route("/venue_page_for_producers", methods=["POST"])
def venue_info_for_producers():

    user_id = session.get("user_id")
    venue_id = request.json.get("venue_id")

    user = User.query.filter_by(user_id=user_id).first()
    venue = Venue.query.filter_by(venue_id=venue_id).first()
    time = Time.query.filter_by(time_id=venue.time_id).first()

    return jsonify( user_id=user.user_id,
                    user_email=user.user_email, 
                    user_fname=user.user_fname, 
                    user_lname=user.user_lname,                      
                    monday=time.monday,
                    tuesday=time.tuesday,
                    wednesday=time.wednesday,
                    thursday=time.thursday,
                    friday=time.friday,
                    saturday=time.saturday,
                    sunday=time.sunday,
                    morning=time.morning,
                    late_morning=time.late_morning,
                    early_night=time.early_night,
                    late_night=time.late_night,
                    venue_id=venue.venue_id,
                    venue_name=venue.venue_name,
                    venue_url=venue.venue_url, 
                    venue_email=venue.venue_email, 
                    venue_address=venue.venue_address, 
                    venue_city=venue.venue_city,
                    venue_backspace=venue.venue_backspace,
                    venue_capacity=venue.venue_capacity,
                    venue_license=venue.venue_license,
                    venue_type=venue.venue_type,
                    venue_rent=venue.venue_rent)   



@app.route("/venue_update", methods=["POST"])
def process_update_venue_info():
    """Process update info"""
    user_id = session.get("user_id")
    venue_id = request.json.get("venue_id")
    
    update_venue_info = Venue.query.filter_by(venue_id=venue_id).first()

    update_venue_time = Time.query.filter_by(time_id=update_venue_info.time_id).first()

    monday = request.json.get("monday")
    tuesday = request.json.get("tuesday")
    wednesday = request.json.get("wednesday")
    thursday = request.json.get("thursday")
    friday = request.json.get("friday")
    saturday = request.json.get("saturday")
    sunday = request.json.get("sunday")
    morning = request.json.get("morning")
    late_morning = request.json.get("late_morning")
    early_night = request.json.get("early_night")
    late_night = request.json.get("late_night")
    venue_name = request.json.get("venue_name")
    venue_url = request.json.get("venue_url")
    venue_email = request.json.get("venue_email")
    venue_backspace = request.json.get("venue_backspace")  
    venue_capacity = request.json.get("venue_capacity")
    venue_license = request.json.get("venue_license") 
    venue_rent = request.json.get("venue_rent")

    update_venue_time.monday = monday
    update_venue_time.tuesday = tuesday
    update_venue_time.wednesday = wednesday
    update_venue_time.thursday = thursday
    update_venue_time.friday = friday
    update_venue_time.saturday = saturday
    update_venue_time.sunday = sunday
    update_venue_time.late_morning = late_morning
    update_venue_time.early_night = early_night
    update_venue_time.late_night = late_night   
    update_venue_info.venue_name = venue_name
    update_venue_info.venue_url = venue_url
    update_venue_info.venue_email = venue_email
    update_venue_info.venue_capacity = venue_capacity
    update_venue_info.venue_backspace = venue_backspace
    update_venue_info.venue_license = venue_license
    update_venue_info.venue_rent = venue_rent
   
    db.session.commit()

    venue_rarking = adding_ranking("venue", update_venue_info.venue_id)

    return jsonify(monday=monday,
                    tuesday=tuesday,
                    wednesday=wednesday,
                    thursday=thursday,
                    friday=friday,
                    saturday=saturday,
                    sunday=sunday,
                    morning=morning,
                    late_morning=late_morning,
                    early_night=early_night,
                    late_night=late_night,
                    venue_url=venue_url, 
                    venue_email=venue_email, 
                    venue_backspace=venue_backspace,
                    venue_capacity=venue_capacity,
                    venue_license=venue_license,
                    venue_type=venue_type,
                    venue_rent=venue_rent)


@app.route("/producer_page", methods=["POST"])
def producer_page():

    user_id = session.get("user_id")

    user = User.query.filter_by(user_id=user_id).first()

    show_list = Show.query.filter_by(user_id=user.user_id).all()

    list_shows = []

    for row in show_list:
        list_shows.append({"show_id":row.show_id, 
                          "show_name":row.show_name,
                          "show_type":row.show_type,
                          "show_url":row.show_url,
                          "show_amount_people":row.show_amount_people,
                          "show_dressing_room":row.show_dressing_room,
                          "show_length":row.show_length,
                          "location_id":row.location_id,
                          "show_ticket_price":row.show_ticket_price})
                    
    return jsonify(user_id=user.user_id, 
                     user_fname=user.user_fname,
                     show_list=list_shows,
                     user_lname=user.user_lname,
                     user_email=user.user_email)
                   

@app.route("/register_show", methods=["POST"])
def new_show_page_process():

    user_id = session.get("user_id")

    monday = request.json.get("monday")
    tuesday = request.json.get("tuesday")
    wednesday = request.json.get("wednesday")
    thursday = request.json.get("thursday")
    friday = request.json.get("friday")
    saturday = request.json.get("saturday")
    sunday = request.json.get("sunday")
    morning = request.json.get("morning")
    late_morning = request.json.get("late_morning")
    early_night = request.json.get("early_night")
    late_night = request.json.get("late_night")

    new_time = Time(monday=monday,
                    tuesday=tuesday,
                    wednesday=wednesday,
                    thursday=thursday,
                    friday=friday,
                    saturday=saturday,
                    sunday=sunday,
                    morning=morning,
                    late_morning=late_morning,
                    early_night=early_night,
                    late_night=late_night)

    db.session.add(new_time)
    db.session.commit()
    db.session.refresh(new_time)
  
    berkeley = request.json.get("berkeley")
    burlingame = request.json.get("burlingame")
    daly_city = request.json.get("daly_city")
    dublin = request.json.get("dublin")
    emeryville = request.json.get("emeryville")
    palo_alto = request.json.get("palo_alto")
    san_francisco = request.json.get("san_francisco")
    san_jose = request.json.get("san_jose")
    santa_clara = request.json.get("santa_clara")
    sunnyvale = request.json.get("sunnyvale")

    new_location = Location(berkeley=berkeley,
                            burlingame=burlingame,
                            daly_city=daly_city,
                            dublin=dublin,
                            emeryville=emeryville,
                            palo_alto=palo_alto,
                            san_francisco=san_francisco,
                            san_jose=san_jose,
                            santa_clara=santa_clara,
                            sunnyvale=sunnyvale)
                           
    db.session.add(new_location)
    db.session.commit()
    db.session.refresh(new_location)

    show_name = request.json.get("show_name")
    show_type = request.json.get("show_type")
    show_url = request.json.get("show_url")
    show_amount_people = request.json.get("show_amount_people")
    show_dressing_room = request.json.get("show_dressing_room")
    show_length = request.json.get("show_length")
    show_location_preferred = request.json.get("show_location_preferred")
    show_ticket_price = request.json.get("show_ticket_price")
    show_rent = request.json.get("show_rent")
   
    new_show = Show(user_id=user_id,
                show_name=show_name,
                show_type=show_type, 
                show_url=show_url, 
                show_amount_people=show_amount_people, 
                show_dressing_room=show_dressing_room,
                show_length=show_length,
                location_id=new_location.location_id,
                show_ticket_price=show_ticket_price,
                time_id=new_time.time_id,
                show_rent=show_rent)

    db.session.add(new_show)
    db.session.commit()
    db.session.refresh(new_show)

    show_rarking = adding_ranking("show", new_show.show_id)

    user = User.query.filter_by(user_id=user_id).first()
  
    return jsonify( user_fname=user.user_fname,
                    monday=monday,
                    tuesday=tuesday,
                    wednesday=wednesday,
                    thursday=thursday,
                    friday=friday,
                    saturday=saturday,
                    sunday=sunday,
                    morning=morning,
                    late_morning=late_morning,
                    early_night=early_night,
                    late_night=late_night,
                    show_name=show_name,
                    show_type=show_type, 
                    show_url=show_url, 
                    show_amount_people=show_amount_people, 
                    show_dressing_room=show_dressing_room,
                    show_length=show_length,
                    show_ticket_price=show_ticket_price,
                    show_rent=show_rent,
                    show_id=new_show.show_id,  
                    berkeley=berkeley,
                    burlingame=burlingame,
                    daly_city=daly_city,
                    dublin=dublin,
                    emeryville=emeryville,
                    palo_alto=palo_alto,
                    san_francisco=san_francisco,
                    san_jose=san_jose,
                    santa_clara=santa_clara,
                    sunnyvale=sunnyvale)


@app.route("/show_single_page", methods=["POST"])
def single_show_info():
 
    user_id = session.get("user_id")
    show_id = request.json.get("show_id")

    user_info = User.query.filter_by(user_id=user_id).first()
    show_info = Show.query.filter_by(show_id=show_id).first()
    show_time = Time.query.filter_by(time_id=show_info.time_id).first()
    show_location = Location.query.filter_by(location_id=show_info.location_id).first()

    return jsonify( user_id= user_id,
                    monday=show_time.monday,
                    tuesday=show_time.tuesday,
                    wednesday=show_time.wednesday,
                    thursday=show_time.thursday,
                    friday= show_time.friday,
                    saturday=show_time.saturday,
                    sunday=show_time.sunday,
                    morning=show_time.morning,
                    late_morning=show_time.late_morning,
                    early_night=show_time.early_night,
                    late_night=show_time.late_night,                 
                    show_id=show_info.show_id,
                    show_name=show_info.show_name,
                    show_type=show_info.show_type,
                    show_url=show_info.show_url,
                    show_amount_people=show_info.show_amount_people,
                    show_dressing_room=show_info.show_dressing_room,
                    show_length=show_info.show_length,
                    show_ticket_price=show_info.show_ticket_price,
                    show_rent=show_info.show_rent,                                   
                    berkeley=show_location.berkeley,
                    burlingame=show_location.burlingame,
                    daly_city=show_location.daly_city,
                    dublin=show_location.dublin,
                    emeryville=show_location.emeryville,
                    palo_alto=show_location.palo_alto,
                    san_francisco=show_location.san_francisco,
                    san_jose=show_location.san_jose,
                    santa_clara=show_location.santa_clara,
                    sunnyvale=show_location.sunnyvale)
               

@app.route("/show_update", methods=["POST"])
def process_update_show_info():

    user_id = session.get("user_id")
    show_id = request.json.get("show_id")

    update_show_info = Show.query.filter_by(show_id=show_id).first()
    update_show_time = Time.query.filter_by(time_id=update_show_info.time_id).first()
    update_show_location = Location.query.filter_by(location_id=update_show_info.location_id).first()

    monday = request.json.get("monday")
    tuesday = request.json.get("tuesday")
    wednesday = request.json.get("wednesday")
    thursday = request.json.get("thursday")
    friday = request.json.get("friday")
    saturday = request.json.get("saturday")
    sunday = request.json.get("sunday")
    morning = request.json.get("morning")
    late_morning = request.json.get("late_morning")
    early_night = request.json.get("early_night")
    late_night = request.json.get("late_night")

    update_show_time.monday=monday
    update_show_time.tuesday=tuesday
    update_show_time.wednesday=wednesday
    update_show_time.thursday=thursday
    update_show_time.friday=friday
    update_show_time.saturday=saturday
    update_show_time.sunday=sunday
    update_show_time.morning=morning
    update_show_time.late_morning=late_morning
    update_show_time.early_night=early_night
    update_show_time.late_night=late_night

    db.session.commit()

    berkeley = request.json.get("berkeley")
    burlingame = request.json.get("burlingame")
    daly_city = request.json.get("daly_city")
    dublin = request.json.get("dublin")
    emeryville = request.json.get("emeryville")
    palo_alto = request.json.get("palo_alto")
    san_francisco = request.json.get("san_francisco")
    san_jose = request.json.get("san_jose")
    santa_clara = request.json.get("santa_clara")
    sunnyvale = request.json.get("sunnyvale")

    update_show_location.berkeley=berkeley
    update_show_location.burlingame=burlingame
    update_show_location.daly_city=daly_city
    update_show_location.dublin=dublin
    update_show_location.emeryville=emeryville
    update_show_location.palo_alto=palo_alto
    update_show_location.san_francisco=san_francisco
    update_show_location.san_jose=san_jose
    update_show_location.santa_clara=santa_clara
    update_show_location.sunnyvale=sunnyvale

    db.session.commit()
   
    show_name = request.json.get("show_name")
    show_type = request.json.get("show_type")
    show_url = request.json.get("show_url")
    show_amount_people = request.json.get("show_amount_people")
    show_dressing_room = request.json.get("show_dressing_room")
    show_length = request.json.get("show_length")
    show_location_preferred = request.json.get("show_location_preferred")
    show_ticket_price = request.json.get("show_ticket_price")
    show_rent = request.json.get("show_rent")

    update_show_info.show_name=show_name
    update_show_info.show_type=show_type
    update_show_info.show_url=show_url
    update_show_info.show_amount_people=show_amount_people
    update_show_info.show_dressing_room=show_dressing_room
    update_show_info.show_length=show_length
    update_show_info.show_location_preferred=show_location_preferred
    update_show_info.show_ticket_price=show_ticket_price
    update_show_info.show_rent=show_rent
    
    db.session.commit()

    return jsonify(monday=monday,
                    tuesday=tuesday,
                    wednesday=wednesday,
                    thursday=thursday,
                    friday=friday,
                    saturday=saturday,
                    sunday=sunday,
                    morning=morning,
                    late_morning=late_morning,
                    early_night=early_night,
                    late_night=late_night,
                    show_name=show_name,
                    show_type=show_type, 
                    show_url=show_url, 
                    show_amount_people=show_amount_people, 
                    show_dressing_room=show_dressing_room,
                    show_length=show_length,
                    show_ticket_price=show_ticket_price,
                    show_rent=show_rent,                            
                    berkeley=berkeley,
                    burlingame=burlingame,
                    daly_city=daly_city,
                    dublin=dublin,
                    emeryville=emeryville,
                    palo_alto=palo_alto,
                    san_francisco=san_francisco,
                    san_jose=san_jose,
                    santa_clara=santa_clara,
                    sunnyvale=sunnyvale)


@app.route("/venue_list/<int:user_id>", methods=["GET"])
def venue_list(user_id):
    """Update info"""
    venue_list = Venue.query.order_by(Venue.venue_name).all()

    return render_template("venue_list.html", user_id=user_id, venue_list=venue_list)


@app.route("/show_list", methods=["GET"])
# @app.route("/show_list/<int:user_id>", methods=["GET"])
def show_list(user_id):
    """Update info"""
    show_list = Show.query.order_by(Show.show_name).all()

    return jsonify(show_list.to_dict())


@app.route("/get_info", methods=["POST"])
def getting_info():

    number = request.json.get("userId")

    user = User.query.filter_by(user_id=number).first()
    # return jsonify(user) 
    return jsonify(user.lname)


@app.route("/get_match", methods=["POST"])
def getting_match():

    user_type = request.json.get("user_type")
    type_id = request.json.get("type_id")

    if user_type == "venue":

        venue_id = session.get("venue_id")


        venue_info = Venue.query.filter_by(venue_id=type_id).first()

        venue_ranking = venue_info.venue_ranking

        small_ranking = venue_ranking - 5
        big_ranking = venue_ranking + 10

        matched_shows = Show.query.filter(Show.show_ranking.between(small_ranking, big_ranking)).all()

        list_matched_shows = []

        for row in matched_shows:
            list_matched_shows.append({"id":row.show_id, 
                                 "name":row.show_name,
                                 "type":"show"})

        return jsonify(matched_list=list_matched_shows)

    else:    
        show_info = Show.query.filter_by(show_id=type_id).first()

        show_ranking = show_info.show_ranking
        small_ranking = show_ranking - 5
        big_ranking = show_ranking + 10
               
        matched_venues = Venue.query.filter(Venue.venue_ranking.between(small_ranking, big_ranking)).all()

        list_matched_venues = []

        for row in matched_venues:
 
            list_matched_venues.append({"id":row.venue_id, 
                                 "name":row.venue_name,
                                 "type":"venue"})

        return jsonify(matched_list=list_matched_venues)



if __name__ == "__main__":


    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    app.run(host="0.0.0.0")


















