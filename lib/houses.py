import flask
from flask import request, jsonify, Flask
import os
from sampleDB import HOUSES_COLLECTION as houses
from sampleDB import VOLUNTEERS_COLLECTION

from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/hello")
@cross_origin()
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route("/retrieve-houses")
@cross_origin()
def getAllHouses():
    recent = []
    
    h = houses.values()
    for i in range(len(h)):
        recent.append(h[i]['id'])
        
    return recent



