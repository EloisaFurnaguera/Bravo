"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Act


app = Flask(__name__)


@app.route("/")
def show_homepage():
   

    return render_template("homepage.html")





@app.route("/venue")
def show_venue():
  

    return render_template("venue_home.html")


@app.route("/venue_add", methods=["GET"])
def add_venue_form():
    

    return render_template("add_venue_form.html")










@app.route("/act")
def show_act():
    
    return render_template("act_home.html")


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

    app.run(debug=True, host='0.0.0.0')





