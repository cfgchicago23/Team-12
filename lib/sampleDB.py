
# TO IMPORT THESE HASHMAPS, use
# import sampleDB.py
# or
# from sampleDB.py import HOUSES_COLLECTION -  to get just houses hashmap.
# or
# from sampleDB.py import VOLUNTEERS_COLLECTION - to get just volunteers hashmap.


HOUSES_COLLECTION = {
    7543:{
        "location":"Seattle, WA",
        "picure":"example.png",
        "current_volunteers" : [],
        "repairs":[],
        "hours":0
    }
}

VOLUNTEERS_COLLECTION = {
    1:{
        "firstName":"John",
        "lastName":"Doe",
        "password": "JohnsOldPassword",
        "hours":0
    }
}

ADMIN_COLLECTION = {
    'exampleUser': {
        'password': 'examplePassword',
        'id': 1,
        'favorite_pet' : 'dog',
        'email': 'dummydata@org_name',
    }
}