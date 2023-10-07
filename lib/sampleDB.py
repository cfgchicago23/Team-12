
# TO IMPORT THESE HASHMAPS, use
# import sampleDB.py
# or
# from sampleDB.py import HOUSES_COLLECTION -  to get just houses hashmap.
# or
# from sampleDB.py import VOLUNTEERS_COLLECTION - to get just volunteers hashmap.
running_id = 1

HOUSES_COLLECTION = {
    7543:{
        "location":"Seattle, WA"
    }
}

VOLUNTEERS_COLLECTION = {
    8293:{
        "firstName":"John",
        "lastName":"Doe"
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