import pymongo
# from utils.config import config

# mongoClient = pymongo.MongoClient(config.MongoURI)
# mongoDB = mongoClient[config.DBName]

class Mongoose:
    client = None
    db = None

    def connect(uri, options):
        pass

    def disconnect():
        pass

mongoose = Mongoose()

class Schema:
    def __init__(self, conf):
        pass

class Model:
    def __init__(self, schema):
        pass