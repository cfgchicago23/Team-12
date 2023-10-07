from flask import Flask, request, jsonify, session
from itsdangerous import URLSafeTimedSerializer
import smtplib
from email.message import EmailMessage

app = Flask(__name__)
app.secret_key = 'some_secret_key'
app.config['SECURITY_PASSWORD_SALT'] = 'some_salt'
app.config['MAIL_USERNAME'] = 'youremail@gmail.com'  
app.config['MAIL_PASSWORD'] = 'yourpassword'  

serializer = URLSafeTimedSerializer(app.secret_key)

# Mock database (for the purpose of this example)
users = {
    'exampleUser': {
        'password': 'examplePassword',
        'id': 1,
        'favorite_pet' : 'dog',
        'email': 'dummydata@org_name',
    }
}

@app.route('/authenticate', methods=['POST'])
def login():
    data = request.get_json()
    username = data['username']
    if username in users and users[username]['password'] == data['password']:
        session['user_id'] = users[username]['id']
        return jsonify({'message': 'Login successful'})
    return jsonify({'message': 'Login failed'})

@app.route('/change-password', methods=['POST'])
def change_password():
    data = request.get_json()
    username = data['username']
    old_password = data['old_password']
    new_password = data['new_password']

    if username in users and users[username]['password'] == old_password:
        users[username]['password'] = new_password
        return jsonify({'message': 'Password changed successfully'})
    return jsonify({'message': 'Change password failed'})

@app.route('/change-username', methods=['POST'])
def change_username():
    data = request.get_json()
    username = data['username']
    new_username = data['new_username']
    new_password = data['new_password']
    old_data = users[username]
    
    if username in users and users[username]['password'] == data['password']:
        users.pop(username)
        users[new_username] = old_data
        users[new_username]['password'] = new_password
        return jsonify({'message': 'New username and password successfully created'})
    return jsonify({'message': 'Change username failed'})


@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data['email']
    user = next((user for user, details in users.items() if details['email'] == email), None)

    if not user:
        return jsonify({'message': 'Email not registered'})

    token = serializer.dumps(email, salt=app.config['SECURITY_PASSWORD_SALT'])
    link = f"http://localhost:5000/reset-password/{token}"

    send_email(email, link)

    return jsonify({'message': 'Email sent!'})

@app.route('/reset-password/<token>', methods=['POST'])
def reset_password(token):
    try:
        email = serializer.loads(token, salt=app.config['SECURITY_PASSWORD_SALT'], max_age=3600)
    except:
        return jsonify({'message': 'Token is invalid or has expired'})

    data = request.get_json()
    new_password = data['new_password']

    user = next((user for user, details in users.items() if details['email'] == email), None)
    users[user]['password'] = new_password

    return jsonify({'message': 'Password reset successful!'})

def send_email(to, link):
    msg = EmailMessage()
    msg.set_content(f"Click the link to reset your password: {link}")
    msg['Subject'] = 'Password Reset Request'
    msg['From'] = app.config['MAIL_USERNAME']
    msg['To'] = to

    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(app.config['MAIL_USERNAME'], app.config['MAIL_PASSWORD'])
    server.send_message(msg)
    server.quit()

if __name__ == "__main__":
    app.run(debug=True)
