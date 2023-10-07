import flask
from flask import request, jsonify, Flask
import os

app = Flask(__name__)

houses = {}

@app.route("/populateDashboard")
def populateDashboard(userid, message):
    return houses.values()

