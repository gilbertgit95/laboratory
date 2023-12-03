import pymongo
from utils.config import config

mongoClient = pymongo.MongoClient(config['MongoURI'])
mongoDB = mongoClient[config['DBName']]

class Model:
    collection = None

    def __init__(self, collection):
        self.collection = collection

    def insert_many(self, list):
        self.collection.insert_many(list)

    def delete_many(self, query=None):
        if query:
            self.collection.delete_many(query)
        else:
            # this will delete all content of the collection
            self.collection.delete_many({})