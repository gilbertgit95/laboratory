from .dbConn import mongoDB, Model

usersCollection = mongoDB['users']

userModel = Model(usersCollection)