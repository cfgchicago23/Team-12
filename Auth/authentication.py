from flask import Flask, request, jsonify, session

app = Flask(__name__)
app.secret_key = 'some_secret_key'  # You should have a secret key for sessions

# Mock database (for the purpose of this example)
users = {
    'exampleUser': {
        'password': 'examplePassword',
        'id': 1
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

if __name__ == "__main__":
    app.run(debug=True)
