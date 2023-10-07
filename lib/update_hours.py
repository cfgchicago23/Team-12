from flask import Flask, request, jsonify, session
from sampleDB import VOLUNTEERS_COLLECTION as volunteers
from sampleDB import HOUSES_COLLECTION as houses
app = Flask(__name__)


@app.route("/update-hours/<selected_id>")
def updateHours(selected_id):
    # given some id from houses from admin
    added_hours = houses[selected_id]["hours"]

    for volunteer in houses[selected_id]["current_volunteers"]:
        volunteer[hours] += added_hours