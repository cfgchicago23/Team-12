#Make a rest api that returns all info based on parameter id for a specific volunteer

from flask import Flask, jsonify, request
from sampleDB import VOLUNTEERS_COLLECTION

app = Flask(__name__)

@app.route('/volunteer/<int:id>', methods=['GET'])
def get_volunteer(id):
    if id in VOLUNTEERS_COLLECTION:
        return jsonify(VOLUNTEERS_COLLECTION[id]), 200
    else:
        return jsonify({"message": "Volunteer not found"}), 404
    
if __name__ == "__main__":
    app.run(debug=True)


