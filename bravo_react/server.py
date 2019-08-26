"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Show, Time, Location


app = Flask(__name__)

app.secret_key = "mama"



@app.route("/")
def show_homepage():
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
                       email=new_user.user_email,
                       user_type=new_user.user_type)
       
    
    return jsonify("Email_already_in_data")
  
  



@app.route("/user_info_update", methods=["POST"])
def user_info_update_process():

    user_id = session.get("user_id")
    user_type = session.get("user_type")

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
    venue_free_rent = request.json.get("venue_free_rent")
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
                        venue_free_rent=venue_free_rent,
                        time_id=new_time.time_id,
                        venue_rent=venue_rent)


        db.session.add(new_venue)
        db.session.commit()
        db.session.refresh(new_venue)




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
                    
                        venue_name=new_venue.venue_name,
                        venue_url=new_venue.venue_url, 
                        venue_email=new_venue.venue_email, 
                        venue_address=new_venue.venue_address, 
                        venue_city=new_venue.venue_city,
                        venue_type=new_venue.venue_type,
                        venue_backspace=new_venue.venue_backspace,
                        venue_capacity=new_venue.venue_capacity,
                        venue_license=new_venue.venue_license,
                        venue_free_rent=new_venue.venue_free_rent,
                        venue_rent=new_venue.venue_rent)



        


@app.route("/venue_page", methods=["POST"])
def single_venue_info():

    # user_id = request.json.get("user_id")
    user_id = session.get("user_id")


    venue = Venue.query.filter_by(user_id=user_id).first()
    time = Time.query.filter_by(time_id=venue.time_id).first()


    return jsonify(monday=time.monday,
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

                    venue_name=venue.venue_name,
                    venue_url=venue.venue_url, 
                    venue_email=venue.venue_email, 
                    venue_address=venue.venue_address, 
                    venue_city=venue.venue_city,
                    venue_backspace=venue.venue_backspace,
                    venue_capacity=venue.venue_capacity,
                    venue_license=venue.venue_license,
                    venue_free_rent=venue.venue_free_rent,
                    venue_rent=venue.venue_rent)



@app.route("/venue_update", methods=["POST"])
def process_update_venue_info():
    """Process update info"""

    user_id = session.get("user_id")
    venue_id = session.get("venue_id")

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


    venue_url = request.json.get("venue_url")
    venue_email = request.json.get("venue_email")
    venue_backspace = request.json.get("venue_backspace")  
    venue_capacity = request.json.get("venue_capacity")
    venue_license = request.json.get("cabaret_license") 
    venue_free_rent = request.json.get("venue_free")
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
   
  
    update_venue_info.venue_url = venue_url
    update_venue_info.venue_email = venue_email
    update_venue_info.venue_capacity = venue_capacity
    update_venue_info.venue_backspace = venue_backspace
    update_venue_info.venue_license = venue_license
    update_venue_info.venue_free_rent = venue_free_rent
    update_venue_info.venue_rent = venue_rent


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

                    venue_url=venue_url, 
                    venue_email=venue_email, 
                    venue_backspace=venue_backspace,
                    venue_capacity=venue_capacity,
                    venue_license=venue_license,
                    venue_free_rent=venue_free_rent,
                    venue_rent=venue_rent)
























@app.route("/producer_page", methods=["POST"])
def producer_page():


    user_id = session.get("user_id")


    user = User.query.filter_by(user_id=user_id).first()

    show_list = Show.query.filter_by(user_id=user.user_id).all()

    responseJson = {}
    print(user_id)


    print(show_list.venue_name)


   
   




    return jsonify(user_id)


    # return jsonify(user_id=user_id,
    #                user_fname=user.user_fname, 
    #                user_lname=user.user_lname)
                  



    # {
    #     fname: 'andrew',
    #     lname: 'blum',
    #     shows: {
    #         0: 'show name 1',
    #         1: 'show name 2'
    #     }      
    # }
    
    # const responseJson = {}

    # for show, i in enumate(show_list):
    #     responseJson[shows][i] = show

    # # return jsonify(user.user_fname)

    # return jsonify({"user_fname": user.user_fname,
    #                 "user_lname": user.user_lname,
    #                 "show_name": show_list})


    # return render_template("producer_page.html", user_id=user.user_id, 
    #                                              user_fname =user.user_fname,
    #                                              user_lname =user.user_lname,
    #                                              show_list=show_list)
                                                                          
          
























































@app.route("/show_page", methods=["POST"])
def new_show_page_process(user_id):

    monday = request.form.get("monday")
    tuesday = request.form.get("tuesday")
    wednesday = request.form.get("wednesday")
    thursday = request.form.get("thursday")
    friday = request.form.get("friday")
    saturday = request.form.get("saturday")
    sunday = request.form.get("sunday")
    morning = request.form.get("morning")
    late_morning = request.form.get("late_morning")
    early_night = request.form.get("early_night")
    late_night = request.form.get("late_night")



    # I NEED TO FIND HOW TO DO THIS

    location_list = request.form.getlist("show_location_preferred")



    for idx in range(10):
        if len(location_list) <= idx:
            location_list.append(None)
    


    #MAKE THIS INTO JSON


    new_location = Location(anywhere=None,
                            location_1=location_list[0],
                            location_2=location_list[1],
                            location_3=location_list[2],
                            location_4=location_list[3],
                            location_5=location_list[4],
                            location_6=location_list[5],
                            location_7=location_list[6],
                            location_8=location_list[7],
                            location_9=location_list[8],
                            location_10=location_list[9])

    db.session.add(new_location)
    db.session.commit()
    db.session.refresh(new_location)






    show_name = request.form.get("show_name")
    show_type = request.form.get("show_type")
    show_url = request.form.get("show_url")
    show_amount_people = request.form.get("show_amount_people")
    show_dressing_room = request.form.get("show_dressing_room")
    show_length = request.form.get("show_length")
    show_location_preferred = request.form.get("show_location_preferred")
    show_ticket_price = request.form.get("show_ticket_price")
    show_rent = request.form.get("show_rent")
    show_free_rent = request.form.get("show_free_rent")



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



    new_show = Show(user_id=user_id,
                show_name=show_name,
                show_type=show_type, 
                show_url=show_url, 
                show_amount_people=show_amount_people, 
                show_dressing_room=show_dressing_room,
                show_length=show_length,
                # location_id=new_location.location_id,
                show_ticket_price=show_ticket_price,
                time_id=new_time.time_id,
                show_rent=show_rent,
                show_free_rent=show_free_rent)


    db.session.add(new_show)
    db.session.commit()
    # db.session.refresh(new_show) #I ONLY NEED THIS IF I WANT TO KEEP THE SHOW ID IN A SESSION



    user_id = session.get("user_id")
    # session["show_id"] = new_show.show_id


    #     flash(f"Venue {venue_name} added.")


    # return redirect(f"/producer_page/{user_id}")


    user = User.query.filter_by(user_id=user_id).first()
    show_list = Show.query.filter_by(user_id=user_id).all()

    return redirect(f"/producer_page/{user_id}")
   






             
                                                 
                                                 
                                                   

@app.route("/show_single_page", methods=["GET"])
def single_show_info():

   
    user_id = session.get("user_id")
   


    user_info = User.query.filter_by(user_id=user_id).first()

    show_info = Show.query.filter_by(show_id=show_id).first()






    
    return render_template("show_single_page.html", user_id= user_id,
                                                    user_fname=user_info.user_fname,
                                                    user_lname=user_info.user_lname,
                                                    user_type=user_info.user_type,
                                                    show_id=show_info.show_id,
                                                    show_name=show_info.show_name,
                                                    show_type=show_info.show_type,
                                                    show_url=show_info.show_url,
                                                    show_amount_people=show_info.show_amount_people,
                                                    show_dressing_room=show_info.show_dressing_room,
                                                    show_length=show_info.show_length,
                                                    location_id=show_info.location_id,
                                                    time_id=show_info.time_id,
                                                    show_ticket_price=show_info.show_ticket_price,
                                                    show_rent=show_info.show_rent,
                                                    show_free_rent=show_info.show_free_rent)


 




@app.route("/show_update/<int:show_id>", methods=["GET"])
def updated_show_info(show_id):
    """Update info"""

    return render_template("show_update_form.html", show_id=show_id)




@app.route("/show_update/<int:show_id>", methods=["POST"])
def process_update_show_info(show_id):

    

    update_show_info = Show.query.filter_by(show_id=show_id).first()
    update_show_time = Time.query.filter_by(time_id=update_show_info.time_id).first()


    monday = request.form.get("monday")
    tuesday = request.form.get("tuesday")
    wednesday = request.form.get("wednesday")
    thursday = request.form.get("thursday")
    friday = request.form.get("friday")
    saturday = request.form.get("saturday")
    sunday = request.form.get("sunday")
    morning = request.form.get("morning")
    late_morning = request.form.get("late_morning")
    early_night = request.form.get("early_night")
    late_night = request.form.get("late_night")


    show_name = request.form.get("show_name")
    show_type = request.form.get("show_type")
    show_url = request.form.get("show_url")
    show_amount_people = request.form.get("show_amount_people")
    show_dressing_room = request.form.get("show_dressing_room")
    show_length = request.form.get("show_length")
    show_location_preferred = request.form.get("show_location_preferred")
    show_ticket_price = request.form.get("show_ticket_price")
    show_rent = request.form.get("show_rent")
    show_free_rent = request.form.get("show_free_rent")



    update_show_info.show_name=show_name
    update_show_info.show_type=show_type
    update_show_info.show_url=show_url
    update_show_info.show_amount_people=show_amount_people
    update_show_info.show_dressing_room=show_dressing_room
    update_show_info.show_length=show_length
    update_show_info.show_location_preferred=show_location_preferred
    update_show_info.show_ticket_price=show_ticket_price
    update_show_info.show_rent=show_rent
    update_show_info.show_free_rent=show_free_rent

    



    db.session.commit()


    user_id = session.get("user_id")


    return render_template("show_single_page.html", user_id=user_id, 
                                                    show_id=show_id,
                                                    show_name=update_show_info.show_name,
                                                    show_type=update_show_info.show_type,
                                                    show_url=update_show_info.show_url,
                                                    show_amount_people=update_show_info.show_amount_people,
                                                    show_dressing_room=update_show_info.show_dressing_room,
                                                    show_length=update_show_info.show_length,
                                                    show_location_preferred=update_show_info.show_location_preferred,
                                                    show_ticket_price=update_show_info.show_ticket_price,
                                                    show_rent=update_show_info.show_rent,
                                                    show_free_rent=update_show_info.show_free_rent)







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

    print (user.user_lname)

    # return jsonify(user) 

    return jsonify(user.lname)











if __name__ == "__main__":


    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    app.run(host="0.0.0.0")


















