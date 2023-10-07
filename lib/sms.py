import flask
from flask import request, jsonify, Flask
import os
from twilio.rest import Client
from twilio.rest import Client
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/hello")
@cross_origin()
def helloWorld():
  return "Hello, cross-origin-world!"

# Find your Account SID and Auth Token at twilio.com/console
# and set the environment variables. See http://twil.io/secure
account_sid = 'ACa227e979cb36c904d2253a5affb57933'
auth_token = ''
# Download the helper library from https://www.twilio.com/docs/python/install
# Your Account Sid and Auth Token from twilio.com/console


account_sid = 'INSERT TWILIO SID HERE'
auth_token = 'INSERT TWILIO AUTH TOKEN'
users = {}

APPROVED_PHONE_NUMBER = "ADD APPROVED # HERE"

# As of a month ago, twilio added a restriction that allows us to not use twilio in a hackathon,
# https://support.twilio.com/hc/en-us/articles/1260801864489-How-do-I-register-to-use-A2P-10DLC-messaging-
# If this werent a thing, we could allow text integration easily.

@app.route("/sendText/<userid>/<message>")
@cross_origin()
def sendText(userid, message):

    # Create a Twilio client
    client = Client(account_sid, auth_token)

    # Send a text message
    client.messages.create(
        to=users[userid]['phoneNumber'],
        from_=APPROVED_PHONE_NUMBER,
        body=message
    )
    
@app.route("/notifyNewPost/<houseid>")
@cross_origin()
def notifyNewPost(houseid):

    # Create a Twilio client
    client = Client(account_sid, auth_token)

    for userInfo in users.values():
        
        # Send a text message
        client.messages.create(
            to=userInfo['phoneNumber'],
            from_=APPROVED_PHONE_NUMBER,
            body="New volunteer opportunity here! INSERT LINK HERE"
        )

    

if __name__ == "__main__":
    app.run(debug=True)
