import flask
from flask import request, jsonify, Flask
import os
from sampleDB import HOUSES_COLLECTION as houses
from sampleDB import VOLUNTEERS_COLLECTION

@app.route("/retrieve-houses")
def getNMostRecentUsers():
    recent = []
    
    h = houses.values()
    for i in range(len(h)):
        recent.append(h[i]['id'])
        
    return recent

def getHouseById(id):
    return houses[id]