import flask
import random
from flask import request, jsonify, Flask
import os
from itsdangerous import URLSafeTimedSerializer
from sampleDB import HOUSES_COLLECTION
from sampleDB import VOLUNTEERS_COLLECTION
from sampleDB import ADMIN_COLLECTION
from sampleDB import VOLUNTEER_ID
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.secret_key = 'some_secret_key'
app.config['SECURITY_PASSWORD_SALT'] = 'some_salt'
app.config['MAIL_USERNAME'] = 'youremail@gmail.com'  
app.config['MAIL_PASSWORD'] = 'yourpassword'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

serializer = URLSafeTimedSerializer(app.secret_key)

@app.route('/authenticate', methods=['GET', 'POST'])
@cross_origin()
def login():
    if request.method == 'POST':
        data = request.get_json(force=True) 
        username = data.get('username')  # This will default to None if 'username' key doesn't exist
        if username and username in ADMIN_COLLECTION and ADMIN_COLLECTION[username].get('password') == data.get('password'):
            session['user_id'] = ADMIN_COLLECTION[username]['id']
            return jsonify({'message': 'Login successful'})
        return jsonify({'message': 'Login failed'})
    return "This is the authenticate endpoint. Use a tool like Postman to test POST requests."

@app.route('/change-password', methods=['POST'])
@cross_origin()
def change_password():
    data = request.get_json()
    username = data.get('username')
    old_password = data.get('old_password')
    new_password = data.get('new_password')

    if ADMIN_COLLECTION.get(username) and ADMIN_COLLECTION[username].get('password') == old_password:
        ADMIN_COLLECTION[username]['password'] = new_password
        return jsonify({'message': 'Password changed successfully'})
    return jsonify({'message': 'Change password failed'})

@app.route('/change-username', methods=['POST'])
@cross_origin()
def change_username():
    data = request.get_json()
    user_id = data['user_id']  # Expecting user_id as an integer
    new_username = data['new_username']
    new_password = data['new_password']

    user = next((user_key for user_key in ADMIN_COLLECTION if user_key == user_id), None)

    if user and ADMIN_COLLECTION[user]['password'] == data['password']:
        old_data = ADMIN_COLLECTION[user]
        old_data['username'] = new_username
        old_data['password'] = new_password
        return jsonify({'message': 'Username and password successfully updated'})
    elif user is None:
        return jsonify({'message': f"User with ID '{user_id}' not found!"})
    else:
        return jsonify({'message': 'Change username failed'})

def send_reset_link(email, link):
    subject = "Password Reset Request"
    message = f"Please follow this link to reset your password: {link}"
    msg = Message(subject, sender=app.config['MAIL_USERNAME'], recipients=[email])
    msg.body = message
    mail.send(msg)

@app.route('/forgot-password', methods=['POST'])
@cross_origin()
def forgot_password():
    data = request.get_json()
    email = data['email']
    user = next((user for user, details in ADMIN_COLLECTION.items() if details.get('email') == email), None)

    if not user:
        return jsonify({'message': 'Email not registered'})

    token = serializer.dumps(email, salt=app.config['SECURITY_PASSWORD_SALT'])
    link = f"http://localhost:5000/reset-password/{token}"

    send_reset_link(email, link)  # Using Flask-Mail function here

    return jsonify({'message': 'Email sent!'})

@app.route('/reset-password/<token>', methods=['POST'])
@cross_origin()
def reset_password(token):
    try:
        email = serializer.loads(token, salt=app.config['SECURITY_PASSWORD_SALT'], max_age=3600)
    except:
        return jsonify({'message': 'Token is invalid or has expired'})

    data = request.get_json()
    new_password = data['new_password']

    user = next((user for user, details in ADMIN_COLLECTION.items() if details['email'] == email), None)
    ADMIN_COLLECTION[user]['password'] = new_password

    return jsonify({'message': 'Password reset successful!'})

@app.route("/populateDashboard")
@cross_origin()
def populateDashboard():
    return list(VOLUNTEERS_COLLECTION.values())

@app.route("/retrieve-volunteers")
@cross_origin()
def getVolunteers():
    recent = []
    
    vols = VOLUNTEERS_COLLECTION
    for i in vols:
        recent.append(
            vols[i]['firstName'] + ' ' + vols[i]['lastName']
        )

    # Return the data as a JSON object
    # print(recent)
    return jsonify(recent)


@app.route('/update-house', methods=['POST'])
@cross_origin()
def update_house():
    #retrieve data from form input the admin submits
    data = request.get_json()
    location = data['location']
    picture = data['picture']
    current_volunteers = data['current_volunteers']
    repairs = data['repairs']
    hours = data['hours']

    # update id value to so that it is unique
    random_id = random.randint(0, 100000)
    while(random_id in HOUSES_COLLECTION):
        random_id = random.randint(0, 100000)

    # updates houses
    HOUSES_COLLECTION[random_id] = {
        'location': location,
        'picture': picture,
        'current_volunteers': current_volunteers,
        'repairs' : repairs,
        'hours' : hours,
    }
    
@app.route("/retrieve-houses")
@cross_origin()
def getAllHouses():
    recent = []
    
    houses = HOUSES_COLLECTION
    for i in houses:
        recent.append(
            houses[i]['address']
        )

    # Return the data as a JSON object
    print(recent)
    return jsonify(recent)

@app.route('/volunteer/<int:id>', methods=['GET'])
@cross_origin()
def get_volunteer(id):
    if id in VOLUNTEERS_COLLECTION:
        return jsonify(VOLUNTEERS_COLLECTION[id]), 200
    else:
        return jsonify({"message": "Volunteer not found"}), 404
    
@app.route('/get_house/<int:id>', methods=['GET'])
@cross_origin()
def get_house(id):
    if id in HOUSES_COLLECTION:
        return jsonify(HOUSES_COLLECTION[id]), 200
    else:
        return jsonify({"message": "House not found"}), 404
    
@app.route('/house_assign', methods=['POST'])
@cross_origin()
def assign_house(id):
    data = request.get_json()
    ids = data['ids']
    for i in ids:
        HOUSES_COLLECTION[i]['people'].append(i)
    
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
    random_id = 5
    # VOLUNTEER_ID+=1

    VOLUNTEERS_COLLECTION[random_id] = {
        'first_name': first_name,
        'last_name': last_name,
        'email' : email,
        'phone': phone,
        'country': country,
        'address': address,
        'skills': skills,
        'hours': hours
    }
    print(VOLUNTEERS_COLLECTION)
    return jsonify({"message" : "Volunteer updated successfully"}), 200

@app.route("/update-hours/<selected_id>")
@cross_origin()
def updateHours(selected_id):
    # given some id from houses from admin
    added_hours = HOUSES_COLLECTION[selected_id]["hours"]

    for volunteer in HOUSES_COLLECTION[selected_id]["current_volunteers"]:
        volunteer["hours"] += added_hours

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=4000)