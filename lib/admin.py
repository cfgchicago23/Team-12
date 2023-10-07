import flask
from flask import request, jsonify, Flask
import os
from sampleDB import HOUSES_COLLECTION
from sampleDB import VOLUNTEERS_COLLECTION

app = Flask(__name__)

@app.route("/populateDashboard")
def populateDashboard():
    return list(VOLUNTEERS_COLLECTION.values())

@app.route("/mostRecentVolunteers/<n>")
def getNMostRecentUsers(n):
    recent = []
    
    vols = VOLUNTEERS_COLLECTION.values()
    for i in range(min(n, len(vols))):
        recent.append(vols[i]['firstName'] + vols[i]['lastName'])
        
    return recent

app.run()



