
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
        "current_volunteers" : [1],
        "repairs":["painting", "clean windows"],
        "hours":0

    }
}

VOLUNTEERS_COLLECTION = {
    1:{
        "firstName":"John",
        "lastName":"Doe",
        'email':"example@gmail.com",
        'phone':"xxx-xxx-xxxx",
        'country':"USA",
        'address':"10 Dearborn St",
        'skills': ["plumbing", "painting"],
        "hours":3
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