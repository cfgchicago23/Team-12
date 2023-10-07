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
    hours = 0
    
    # update id value to so that it is unique
    random_id = randint(0, 100000)
    while(random_id in volunteers):
        random_id = randint(0, 100000)

    volunteers[random_id] = {
        'first_name': first_name,
        'last_name': last_name,
        'email' : email,
        'phone':phone,
        'country':country,
        'address':address,
        'hours':hours
    }

    