from flask import Flask, request, jsonify, session
from itsdangerous import URLSafeTimedSerializer
from sampleDB import ADMIN_COLLECTION as users
from flask_mail import Mail, Message

app = Flask(__name__)
mail = Mail(app)

app.secret_key = 'some_secret_key'
app.config['SECURITY_PASSWORD_SALT'] = 'some_salt'
app.config['MAIL_USERNAME'] = 'youremail@gmail.com'  
app.config['MAIL_PASSWORD'] = 'yourpassword'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False

serializer = URLSafeTimedSerializer(app.secret_key)

# Mock database (for the purpose of this example)

@app.route('/authenticate', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        data = request.get_json(force=True)  # This will try to parse JSON even if the content type isn't set
        username = data.get('username')  # This will default to None if 'username' key doesn't exist
        if username and username in users and users[username].get('password') == data.get('password'):
            session['user_id'] = users[username]['id']
            return jsonify({'message': 'Login successful'})
        return jsonify({'message': 'Login failed'})
    return "This is the authenticate endpoint. Use a tool like Postman to test POST requests."

@app.route('/change-password', methods=['POST'])
def change_password():
    data = request.get_json()
    username = data.get('username')
    old_password = data.get('old_password')
    new_password = data.get('new_password')

    if users.get(username) and users[username].get('password') == old_password:
        users[username]['password'] = new_password
        return jsonify({'message': 'Password changed successfully'})
    return jsonify({'message': 'Change password failed'})

@app.route('/change-username', methods=['POST'])
def change_username():
    data = request.get_json()
    user_id = data['user_id']  # Expecting user_id as an integer
    new_username = data['new_username']
    new_password = data['new_password']

    user = next((user_key for user_key in users if user_key == user_id), None)

    if user and users[user]['password'] == data['password']:
        old_data = users[user]
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
def forgot_password():
    data = request.get_json()
    email = data['email']
    user = next((user for user, details in users.items() if details.get('email') == email), None)

    if not user:
        return jsonify({'message': 'Email not registered'})

    token = serializer.dumps(email, salt=app.config['SECURITY_PASSWORD_SALT'])
    link = f"http://localhost:5000/reset-password/{token}"

    send_reset_link(email, link)  # Using Flask-Mail function here

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

if __name__ == "__main__":
    app.run(debug=True)
