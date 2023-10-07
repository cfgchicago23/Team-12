from flask import Flask, redirect

app = Flask(__name__)

@app.route('/donate')
def donate():
    return redirect("https://www.paypal.com/donate?hosted_button_id=NTF9LK8XJTCGG")