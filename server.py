"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Show, Time


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
    session["user_id"] = user.user_id
    # session["check"] = user.user_type




    #route the user to the right page
    if user_type == "venue":


        return redirect(f"/venue_page/{user.user_id}")

    if user_type == "performer":

        return render_template("performer.html/{user.user_id}")





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


@app.route('/logout')
def logout():
    """Log out and delete the cookies"""

    del session["user_id"]
    # del session["check"]

    flash("Logged Out.")
    return redirect("/")




# @app.route("/venue", methods=["GET"])
# def show_venue_page():
#     """Show the venue page"""
#     return render_template("venue.html")



# @app.route("/venue", methods=["POST"])
# def show_venue_match_process():

#     #WILL USE THIS LATER FOR MATCHING
#     return render_template("tryingshit.html")



@app.route("/venue_page/<int:user_id>", methods=["GET"])
def venue_page(user_id):
    """Show venue page"""

    user_venue = User.query.filter_by(user_id=user_id).first()
    
    venue_id = Venue.query.filter_by(user_id=user_id).first()

    

    return render_template("venue_page.html", user_venue=user_venue, venue_id=venue_id)



@app.route("/venue_page/<int:user_id>", methods=["POST"])
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
    

    user_id = session.get("user_id")


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

    #     flash(f"Venue {venue_name} added.")

    return render_template("venue_single_page.html", user_id=user_id, 
                                                     venue_name=new_venue.venue_name,
                                                     venue_id=new_venue.venue_id)




    # flash(f"Venue allreadyin the data")
    # return redirect("/venue_page")

 


@app.route("/venue_update/<int:venue_id>", methods=["GET"])


def updated_venue_info(venue_id):


    """Update info"""

    # venue_id = Venue.query.filter_by(user_id=user_id).first()

    return render_template("venue_update_form.html", venue_id=venue_id)




@app.route("/venue_update/<int:venue_id>", methods=["POST"])
def process_updated_venue_info(venue_id):
    """Process update info"""

    update_venue_info = Venue.query.filter_by(venue_id=venue_id).first()
    update_venue_time = Time.query.filter_by(time_id=time_id).first()


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


    return render_template("venue_single_page.html")





# needs to be redo 

@app.route("/act_list")
def get_acts_list():
    """Show acts list"""

    acts = Act.query.order_by('act_name').all()

    return render_template("act_list.html", acts=acts)

























@app.route("/performer", methods=["GET"])
def show_perfomer_page():
    
    return render_template("performer.html")




@app.route("/performer", methods=["POST"])
def show_act_match_process():

    #Will use this later for matching
  

    return render_template("tryingshit.html")






@app.route("/act_add", methods=["GET"])
def add_act_form():
 

    return render_template("add_act_form.html")    



@app.route("/act_add", methods=["POST"])
def add_act_process():

  

    act_name = request.form.get("act_name")
    act_url = request.form.get("wedsite")
    act_type  = request.form.get("act_type")

    #do something to check if already in the data




    check_act_name = Act.query.filter_by(act_name=act_name).first()

    user_id = session.get("user_id")


    if not check_act_name:


        new_act= Act(user_id=user_id,
                    act_name=act_name, 
                    act_url=act_url, 
                    act_type=act_type)
                     


        db.session.add(new_act)
        db.session.commit()

        flash(f"Act {act_name} added.")

        return redirect("/act")

    return redirect("/act")

@app.route("/venue_list")
def get_venue_list():

    venues = Venue.query.order_by('venue_name').all()

    return render_template("venue_list.html", venues=venues)








@app.route("/act_update", methods=["GET"])
def updated_act_info():
    """Update info"""
    return render_template("act_update_form.html")





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





@app.route("/user_update", methods=["GET"])
def updated_user_info():
    """Update info"""
    return render_template("user_update_form.html")




@app.route("/user_update", methods=["POST"])
def process_user_venue_info():
    """Process update info"""

    user_id = session.get("user_id")

    find_user = User.query.filter_by(user_id=user_id).first()



    fname = request.form.get("fname")
    lname = request.form.get("lname")
    user_email = request.form.get("email")
    password = request.form.get("password")
    user_type = request.form.get("check")

    find_user.fname = fname 
    find_user.lname = lname
    find_user.user_email = user_email
    find_user.password = password 
    find_user.user_type = user_type


    


    db.session.commit()


    return redirect ("/performer")










if __name__ == "__main__":

    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    app.run(host="0.0.0.0")


















