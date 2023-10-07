import requests
from flask import Flask

app = Flask(__name__)

MAILGUN_DOMAIN = "MAILGUN_DOMAIN_HERE"
MAILGUN_API_KEY = "MAILGUN_API_KEY_HERE"

@app.route("/sendEmail/<email>/<subject>/<message>")
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

