from flask import Flask, request, jsonify, session
from sampleDB import VOLUNTEERS_COLLECTION as volunteers
from sampleDB import HOUSES_COLLECTION as houses
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/hello")
@cross_origin()
def helloWorld():
  return "Hello, cross-origin-world!"


@app.route("/update-hours/<selected_id>")
@cross_origin()
def updateHours(selected_id):
    # given some id from houses from admin
    added_hours = houses[selected_id]["hours"]

    for volunteer in houses[selected_id]["current_volunteers"]:
        volunteer["hours"] += added_hours