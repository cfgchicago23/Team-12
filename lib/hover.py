#Make a rest api that returns all info based on parameter id for a specific volunteer

from flask import Flask, jsonify, request
from sampleDB import VOLUNTEERS_COLLECTION
from sampleDB import HOUSES_COLLECTION as houses

app = Flask(__name__)

@app.route('/volunteer/<int:id>', methods=['GET'])
def get_volunteer(id):
    if id in VOLUNTEERS_COLLECTION:
        return jsonify(VOLUNTEERS_COLLECTION[id]), 200
    else:
        return jsonify({"message": "Volunteer not found"}), 404
    
@app.route('/get_house/<int:id>', methods=['GET'])
def get_house(id):
    if id in houses:
        return jsonify(houses[id]), 200
    else:
        return jsonify({"message": "House not found"}), 404
    
if __name__ == "__main__":
    app.run(debug=True)


