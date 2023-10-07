from flask import Flask, request, jsonify, session
from sampleDB import VOLUNTEERS_COLLECTION as volunteers
app = Flask(__name__)

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
    id = data['id']
    # name = first_name + " " + last_name
    if id in volunteers:
        return jsonify({'message': 'Account Already Exists'})
    volunteers[id] = {
        'first_name': first_name,
        'last_name': last_name,
        'email' : email,
        'phone':phone,
        'country':country,
        'address':address,
    }
    return jsonify({'message': 'Sucessfully Added'})
    