from flask import Flask, request, jsonify, session
from sampleDB import HOUSES_COLLECTION as houses
app = Flask(__name__)


# Mock database (for the purpose of this example)

@app.route('/update-house', methods=['POST'])
def update_house():
    #retrieve data from form input the admin submits
    data = request.get_json()
    location = data['location']
    picture = data['picture']
    current_volunteers = data['current_volunteers']
    repairs = data['repairs']

    # update id value to so that it is unique (random number in large range for demo purposes, would otherwise be unique hashing)
    random_id = randint(0, 10000000)

    # updates houses
    houses[random_id] = {
        'location': first_name,
        'picture': picture,
        'current_volunteers': current_volunteers,
        'repairs' : repairs,
    }

app.run()