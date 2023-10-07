from flask import Flask, request, jsonify, session
from sampleDB import VOLUNTEERS_COLLECTION as volunteers
app = Flask(__name__)
app.secret_key = 'some_secret_key'  # You should have a secret key for sessions

# Mock database (for the purpose of this example)

@app.route('/update-volunteer', methods=['POST'])
def update_volunteer():
    data = request.get_json()
    first_name = data['first_name']
    last_name = data['last_name']
    email = data['email']
    phone = data['phone']
    country = data['country']
    address = data['address']
    name = first_name + " " + last_name
    if name in volunteers:
        return jsonify({'message': 'Account Already Exists'})
    volunteers[name] = {
        'first_name': first_name,
        'last_name': last_name,
        'email' : email,
        'phone':phone,
        'country':country,
        'address':address,
    }
    return jsonify({'message': 'Sucessfully Added'})
    