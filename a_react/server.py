"""Project"""

from jinja2 import StrictUndefined

from flask import Flask, render_template, request, flash, redirect, session
from flask_debugtoolbar import DebugToolbarExtension

from model import connect_to_db, db, User, Venue, Act


app = Flask(__name__)


@app.route("/")
def show_homepage():
    """Show the application's homepage."""

    return render_template("homepage.html")



if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')


