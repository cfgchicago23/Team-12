import requests
from flask import Flask
from flask_cors import CORS, cross_origin
from sampleDB import HOUSES_COLLECTION as houses

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/hello")
@cross_origin()
def helloWorld():
  return "Hello, cross-origin-world!"

MAILGUN_DOMAIN = "MAILGUN_DOMAIN_HERE"
MAILGUN_API_KEY = "MAILGUN_API_KEY_HERE"


# current email functionality is intended for sending volunteer hours tracked

# in presentation, acknowledge that we didn't have time to fix the spam issue and that
# we can use this same process to distribute information about upcoming event or needs
@app.route("/writeEmail/<houseId>")
def send_simple_message(houseId):
    for volun in houses[houseId]['volunteers']:
      curr_email = volun['email']
      curr_hours = volun['hours']

      subject = "Rebuiling Together Volunteer Tracker"
      message = f"Hi! You have completed {curr_hours} hours with Rebuilding Together Aurora!
      Thank you for your support!"

      send_simple_message(curr_email, subject, message)

    return "Success"



@app.route("/sendEmail/<email>/<subject>/<message>")
@cross_origin()
def send_simple_message(email, subject, message):
    requests.post(
        "https://api.mailgun.net/v3/" + MAILGUN_DOMAIN + "/messages",
        auth=("api", MAILGUN_API_KEY),
        data={"from": "Rebuilding Together Aurora <rta-noreply@" + MAILGUN_DOMAIN + ">",
              "to": [email],
              "subject": subject,
              "text": message})

    return "Success"

app.run()

