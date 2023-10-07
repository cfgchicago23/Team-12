import requests
from flask import Flask
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/hello")
@cross_origin()
def helloWorld():
  return "Hello, cross-origin-world!"

MAILGUN_DOMAIN = "MAILGUN_DOMAIN_HERE"
MAILGUN_API_KEY = "MAILGUN_API_KEY_HERE"

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

