from flask import Flask, request, jsonify, session
from sampleDB import VOLUNTEERS_COLLECTION as volunteers
import random
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/hello")
@cross_origin()
def helloWorld():
    return "Hello, cross-origin-world!"

@app.route('/update-volunteer', methods=['POST'])
@cross_origin()
def update_volunteer():
    data = request.get_json()
    first_name = data['firstName']
    last_name = data['lastName']
    email = data['email']
    phone = data['phoneNumber']
    country = data['country']
    address = data['address']
    dob = data['dateOfBirth']
    skills = data['areasOfExpertise']
    hours = 0
    
    # update id value to so that it is unique
    random_id = random.randint(0, 100000)
    while(random_id in volunteers):
        random_id = random.randint(0, 100000)

    volunteers[random_id] = {
        'first_name': first_name,
        'last_name': last_name,
        'email' : email,
        'phone': phone,
        'country': country,
        'address': address,
        'skills': skills,
        'hours': hours
    }
    print(volunteers)
    return jsonify({"message" : "Volunteer updated successfully"}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000)