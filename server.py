"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Act


app = Flask(__name__)


app.secret_key = "mama"


@app.route("/")
def show_homepage():
    """Homepage with login"""
   

    return render_template("homepage.html")


@app.route("/login", methods=['GET'])
def login_form():
    """Show login form."""

    return render_template("homepage.html")



@app.route("/login", methods=['POST'])
def login_process():
    """Process login"""

    user_email = request.form.get("email")
    password_user = request.form.get("password")
    user_type = request.form.get("check")

    
    #search if user is already in the data
    user = User.query.filter_by(user_email=user_email).first()

    if not user:

        flash("No such user")
        return redirect("/register")

    if user.password != password_user:

        flash("Incorrect password")
        return redirect("/login")



    #ALSO MAKE SURE THAT THEY ARE REGISTER AS VENUE OR ACT

    session["user_id"] = user.user_id
    session["check"] = user.user_type


    if user_type == "venue":
        return render_template("venue.html")
    if user_type == "performer":
        return render_template("performer.html")



@app.route("/register", methods=["GET"])
def register_form():
   

    return render_template("register_form.html")


@app.route("/register", methods=["POST"])
def register_process():


    fname = request.form.get("fname")
    lname = request.form.get("lname")
    user_email = request.form.get("email")
    password = request.form.get("password")
    user_type = request.form.get("check")



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

        return redirect("/login")

    return redirect("/login")


@app.route('/logout')
def logout():
    """Log out."""

    del session["user_id"]
    del session["check"]
    flash("Logged Out.")
    return redirect("/")




@app.route("/venue", methods=["GET"])
def show_checklist_venue():
  
    return render_template("venue.html")



@app.route("/venue", methods=["POST"])
def show_venue_match_process():

    #Will use this later for matching
  

    return render_template("tryingshit.html")




@app.route("/venue_add", methods=["GET"])
def add_venue_form():
    

    return render_template("add_venue_form.html")



@app.route("/venue_add", methods=["POST"])
def add_venue_process():
    

    venue_name = request.form.get("vname")
    venue_address = request.form.get("v_addess")
    venue_city = request.form.get("venue_city")
    venue_zipcode = request.form.get("venue_zipcode")
    venue_size = request.form.get("venue_size")
    v_email = request.form.get("v_email")
    venue_url = request.form.get("venue_url")


    #THIS IS NOT WORKING IT IS NOT GETTING THE EMAIL
    v_email = Venue.query.filter_by(v_email=v_email).first()

    if not v_email:

        new_venue = Venue(venue_name=venue_name, 
                        venue_address=venue_address, 
                        venue_city=venue_city, 
                        venue_zipcode=venue_zipcode, 
                        venue_size=venue_size,
                        v_email=v_email,
                        venue_url=venue_url)



        db.session.add(new_venue)
        db.session.commit()

        flash(f"Venue {venue_name} added.")

        return redirect("/venue")

    return redirect("/venue")

 


@app.route("/act_list")
def get_acts_list():

    acts = Act.query.order_by('act_name').all()

    return render_template("act_list.html", acts=acts)



@app.route("/venue_list")
def get_venue_list():

    venues = Venue.query.order_by('venue_name').all()

    return render_template("venue_list.html", venues=venues)




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

  

    act_name = request.form.get("name_of_act")
    act_url = request.form.get("wedsite")
    act_type  = request.form.get("act_type")

    #do something to check if already in the data




    act_name = Act.query.filter_by(act_name=act_name).first()

    if not act_name:


        new_act= Act(act_name=act_name, 
                        act_url=act_url, 
                        act_type=act_type)
                     


        db.session.add(new_act)
        db.session.commit()

        flash(f"Act {act_name} added.")

        return redirect("/act")

    return redirect("/act")

  



if __name__ == "__main__":

    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    app.run(host="0.0.0.0")


















