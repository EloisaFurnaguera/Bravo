"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Show, Time, Location


app = Flask(__name__)

app.secret_key = "mama"



@app.route("/")
def show_homepage():
    """Homepage with login form"""   
    return render_template("homepage.html")



@app.route("/login", methods=['POST'])
def login_process():
    """Process login info"""
  
    user_email = request.form.get("email")
    password_user = request.form.get("password")
    user_type = request.form.get("check")

    

  
    #search if user is already in the data and that enter the
    #right user name, pass and type of user
    user = User.query.filter_by(user_email=user_email).first()

    print(user_type )
    print(user.user_type)

    if not user:

        flash("No such user")
        return redirect("/register")

    if user.password != password_user:

        flash("Incorrect password")
        return redirect("/")

    if user.user_type != user_type:

        flash("Incorrect user type")
        return redirect("/")

    #ADD ONE MORE COOKI FOR THE VENUE AND ONE FOR THE PRODUCER

    #keep the id and type in a cookie
    # session["user_id"] = user.user_id
    


    if user_type == "venue":


        if "venue_id" in session:

            venue_id = session.get("venue_id")

            return redirect(f"/venue_single/{venue_id}")

        else:

            check_venue = Venue.query.filter_by(user_id=user.user_id).first()

            if check_venue == None:

                return redirect(f"/new_venue_page/{user.user_id}")

            else:


                session["user_id"] = user.user_id
                session["venue_id"] = check_venue.venue_id

                return redirect(f"/venue_single/{check_venue.venue_id}")


    if user_type == "producer":

        check_producer= Show.query.filter_by(user_id=user.user_id).all()



        return redirect(f"/producer_page/{user.user_id}")


    #     check_venue = Venue.query.filter_by(user_id=user.user_id).first()
       

    #     if check_venue == None:

    #         return redirect(f"/new_venue_page/{user.user_id}")


    #     else:

    #         session["user_id"] = user.user_id
    #         session["venue_id"] = check_venue.venue_id

    #         return redirect(f"/venue_single/{check_venue.venue_id}")

   

    # if user_type == "performer":

    #     return render_template(f"performer.html/{user.user_id}")


@app.route('/logout')
def logout():
    """Log out and delete the cookies"""

    del session["user_id"]

    if "venue_id" in session:

        del session["venue_id"]

    flash("Logged Out.")
    return redirect("/")



@app.route("/register", methods=["GET"])
def show_register_form():
    """Show register form"""
    return render_template("user_register_form.html")



@app.route("/register", methods=["POST"])
def register_process():
    """Register process"""

    #get user info
    fname = request.form.get("fname")
    lname = request.form.get("lname")
    user_email = request.form.get("email")
    password = request.form.get("password")
    user_type = request.form.get("check")


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

        flash(f"User {user_email} added.")

        return redirect("/")

    return redirect("/")



@app.route("/user_info_update/<int:user_id>", methods=["GET"])
def user_info_update(user_id):
   

    return render_template("user_update_form.html", user_id=user_id )



@app.route("/user_info_update/<int:user_id>", methods=["POST"])
def user_info_update_process(user_id):



    fname = request.form.get("fname")
    lname = request.form.get("lname")
    user_email = request.form.get("email")
    password = request.form.get("password")


    find_user = User.query.filter_by(user_id=user_id).first()


    find_user.fname = fname 
    find_user.lname = lname
    find_user.user_email = user_email
    find_user.password = password 
  

    db.session.commit()


    venue_id = session.get("venue_id")

    if "venue_id" in session:

        return redirect(f"/venue_single/{venue_id}")




@app.route("/new_venue_page/<int:user_id>", methods=["GET"])
def venue_page(user_id):
    """Show venue page"""


    user_venue = User.query.filter_by(user_id=user_id).first()


    return render_template("venue_new_page.html", user_id=user_venue.user_id,
                                                  user_email=user_venue.user_email,
                                                  user_fname=user_venue.user_fname,
                                                  user_lname=user_venue.user_lname)
                                                                 


@app.route("/new_venue_page/<int:user_id>", methods=["POST"])
def venue_page_process(user_id):
    """Process new venue"""
    
    #get new venue info
    

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




    venue_name = request.form.get("venue_name")
    venue_url = request.form.get("venue_url")
    venue_email = request.form.get("venue_email")
    venue_address = request.form.get("venue_address")
    venue_city = request.form.get("venue_city")
    venue_type = request.form.get("venue_type") 
    venue_backspace = request.form.get("venue_backspace")  
    venue_capacity = request.form.get("venue_capacity")
    venue_license = request.form.get("cabaret_license") 
    venue_free_rent = request.form.get("venue_free")
    venue_rent = request.form.get("venue_rent")
   

   # I NEED TO ADD ANOTHERE COMDITION
   #check the venue is not allready in the data by using the email
    # checking_email= Venue.query.filter_by(v_email=v_email).first()
    

    # user_id = session.get("user_id")


    #I NEED TO ADD ANOTHERE COMDITION 
    # if not checking_email:



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



    session["user_id"] = user_id
    session["venue_id"] = new_venue.venue_id
    


    #     flash(f"Venue {venue_name} added.")

    return redirect(f"/venue_single/{new_venue.venue_id}")




    # flash(f"Venue allreadyin the data")
    # return redirect("/venue_page")





@app.route("/venue_single/<int:venue_id>", methods=["GET"])
def single_venue_info(venue_id):


    venue = Venue.query.filter_by(venue_id=venue_id).first()
    time = Time.query.filter_by(time_id=venue.time_id).first()



    return render_template("venue_single_page.html", user_id=venue.user_id, 
                                                     venue_name=venue.venue_name,
                                                     venue_id=venue.venue_id,
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
                                                     late_night=time.late_night)





@app.route("/venue_update/<int:venue_id>", methods=["GET"])
def updated_venue_info(venue_id):
    """Update info"""

    # venue_id = Venue.query.filter_by(user_id=user_id).first()

    return render_template("venue_update_form.html", venue_id=venue_id)




@app.route("/venue_update/<int:venue_id>", methods=["POST"])
def process_updated_venue_info(venue_id):
    """Process update info"""

    update_venue_info = Venue.query.filter_by(venue_id=venue_id).first()
    update_venue_time = Time.query.filter_by(time_id=update_venue_info.time_id).first()


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


    # venue_name = request.form.get("venue_name")
    venue_url = request.form.get("venue_url")
    venue_email = request.form.get("venue_email")
    # venue_type = request.form.get("venue_type") 
    venue_backspace = request.form.get("venue_backspace")  
    venue_capacity = request.form.get("venue_capacity")
    venue_license = request.form.get("cabaret_license") 
    venue_free_rent = request.form.get("venue_free")
    venue_rent = request.form.get("venue_rent")




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


    
    # update_venue.venue_name = venue_name
    update_venue_info.venue_url = venue_url
    update_venue_info.venue_email = venue_email
    #update_venue.venue_type = venue_type
    update_venue_info.venue_backspace = venue_backspace
    # update_venue.venue_capacity = venue_capacity
    update_venue_info.venue_license = venue_license
    update_venue_info.venue_free_rent = venue_free_rent
    update_venue_info.venue_rent = venue_rent


    db.session.commit()


    user_id = session.get("user_id")


    return render_template("venue_single_page.html", user_id=user_id, 
                                                     venue_id=venue_id,
                                                     monday=update_venue_time.monday,
                                                     tuesday=update_venue_time.tuesday,
                                                     wednesday=update_venue_time.wednesday,
                                                     thursday=update_venue_time.thursday,
                                                     friday=update_venue_time.friday,
                                                     saturday=update_venue_time.saturday,
                                                     sunday=update_venue_time.sunday,
                                                     morning=update_venue_time.morning,
                                                     late_morning=update_venue_time.late_morning,
                                                     early_night=update_venue_time.early_night,
                                                     late_night=update_venue_time.late_night)































@app.route("/new_show_page/<int:user_id>", methods=["GET"])
def new_show_page(user_id):


    user_show = User.query.filter_by(user_id=user_id).first()
    
    return render_template("producer_new_show_page.html", user_id=user_id,
                                                         user_email=user_show.user_email,
                                                         user_fname=user_show.user_fname,
                                                         user_lname=user_show.user_lname)




@app.route("/new_show_page/<int:user_id>", methods=["POST"])
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



    session["user_id"] = user_id
    # session["show_id"] = new_show.show_id


    #     flash(f"Venue {venue_name} added.")


    return redirect(f"/producer_page/{user_id}")






@app.route("/producer_page/<int:user_id>", methods=["GET"])
def producer_page(user_id):

    
    print(user_id)

    user = User.query.filter_by(user_id=user_id).first()
    show_list = Show.query.filter_by(user_id=user_id).all()


    return render_template("producer_page.html", user_id=user.user_id, 
                                                 user_fname =user.user_fname,
                                                 user_lname =user.user_lname,
                                                 show_list=show_list)
                                                                          
                                                 
                                                 
                                                   

  

 
# @app.route("/show_single/<int:show_id>", methods=["GET"])
# def producer_page(show_id):

#     pass
# show_name=show.show_name,














@app.route("/act_update", methods=["POST"])
def process_act_venue_info():
    """Process update info"""

    user_id = session.get("user_id")

    find_act = Act.query.filter_by(user_id=user_id).first()

    

    act_name = request.form.get("act_name")
    act_url = request.form.get("wedsite")
    act_type  = request.form.get("act_type")




    find_act.act_name = act_name
    find_act.act_url = act_url
    find_act.act_type = act_type
 


    db.session.commit()


    return redirect ("/performer")









@app.route("/act_list")
def get_acts_list():
    """Show acts list"""

    acts = Act.query.order_by('act_name').all()

    return render_template("act_list.html", acts=acts)



@app.route("/venue_list")
def get_venue_list():

    venues = Venue.query.order_by('venue_name').all()

    return render_template("venue_list.html", venues=venues)











if __name__ == "__main__":


    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    app.run(host="0.0.0.0")


















