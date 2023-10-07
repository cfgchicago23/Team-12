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
    email = data['email']
    current_volunteers = data['phone']
    repairs = data['repairs']
    address = data['address']
    running_id = running_id + 1 # make sure this variable is accessible here, import if needed

    volunteers[running_id] = {
        'first_name': first_name,
        'last_name': last_name,
        'email' : email,
        'phone':phone,
        'country':country,
        'address':address,
    }
    return jsonify({'message': 'Sucessfully Added'})