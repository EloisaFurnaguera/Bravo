"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Act


app = Flask(__name__)


app.secret_key = "mama"


@app.route("/")
def show_homepage():
   

    return render_template("homepage.html")


# @app.route("/login", methods=['GET'])
# def login_form():
#     """Show login form."""

#     return render_template("login_form.html")



@app.route("/login", methods=['POST'])
def login_process():
    """Process login."""

    email = request.form.get("email")
    password_user = request.form.get("password")
    user_type = request.form.get("check")


    user = User.query.filter_by(email=email).first()



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
    email = request.form.get("email")
    password = request.form.get("password")
    user_type = request.form.get("check")



    check_email = User.query.filter_by(email=email).first()

    if not check_email:

        new_user = User(password=password, 
                        email=email, 
                        user_fname=fname, 
                        user_lname=lname, 
                        user_type=user_type)

        db.session.add(new_user)
        db.session.commit()

        flash(f"User {email} added.")

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
def show_venue():
  
    return render_template("venue.html")



@app.route("/venue", methods=["POST"])
def show_venue_process():

    #Will use this later for matching
  

    return render_template("tryingshit.html")





@app.route("/venue_add", methods=["GET"])
def add_venue_form():
    

    return render_template("add_venue_form.html")



@app.route("/venue_add", methods=["GET"])
def add_venue_process():
    

    return render_template("tryingshit.html")











@app.route("/performer")
def show_act():
    
    return render_template("performer.html")



@app.route("/act_add", methods=["GET"])
def add_act_form():
 

    return render_template("add_act_form.html")    



@app.route("/act_add", methods=["POST"])
def add_act_process():

    pass


    name_act = request.form.get("name_of_act")
    wedsite = request.form.get("wedsite")
    type_act = request.form.get("act_type")

    #do something to check if already in the data



    new_act = User(act_name=name_act, act_url=wedsite, act_type=type_act)

    db.session.add(new_act)
    db.session.commit()

    return redirect("/act")

























if __name__ == "__main__":

    app.debug = True

    connect_to_db(app)
 
    # DebugToolbarExtension(app)

    app.run(host="0.0.0.0")
