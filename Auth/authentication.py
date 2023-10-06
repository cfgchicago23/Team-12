from flask import flask

app = Flask(__name__)

usernames = {}
passwords = {}

@app.route("/authenicate")
def hello_world():
  return "Hello, World!"

@app.route('/authenticate', methods=['POST'])
def login():
    data = request.get_json()
    user = User.query.filter_by(username=data['username']).first()
    if user and passwords[user] == data['password']:
        session['user_id'] = user.id
        return jsonify({'message': 'Login successful'})
    return jsonify({'message': 'Login failed'})

if __name__ == "__main__":
  app.run(debug=True)