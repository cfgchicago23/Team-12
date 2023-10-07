import flask
from flask import request, jsonify, Flask
import os

app = Flask(__name__)

houses = {}
volunteers = {}

@app.route("/populateDashboard")
def populateDashboard(userid, message):
    return houses.values()

@app.route("/mostRecentVolunteers/<n>")
def getNMostRecentUsers(n):
    recent = []
    
    vols = volunteers.values()
    for i in range(n):
        recent.append(vols[i]['firstName'] + vols[i]['lastName'])
        
    return recent




