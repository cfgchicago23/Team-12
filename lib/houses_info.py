from flask import Flask, request, jsonify, session
from sampleDB import HOUSES_COLLECTION as houses
app = Flask(__name__)
app.secret_key = 'some_secret_key'  # You should have a secret key for sessions


# Mock database (for the purpose of this example)

@app.route('/update-house', methods=['POST'])
def update_house():
    data = request.get_json()
    location = data['location']
    # picure = data['picure']
    current_volunteers = data['current_volunteers']
    repairs = data['repairs']
    running_id = running_id + 1 # make sure this variable is accessible here, import if needed

    volunteers[running_id] = {
        'location': first_name,
        'picure': picure,
        'current_volunteers': current_volunteers,
        'repairs' : repairs,
    }