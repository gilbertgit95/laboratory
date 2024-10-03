import pymongo
from utils.config import config

mongoClient = pymongo.MongoClient(config['MongoURI'])
mongoDB = mongoClient[config['DBName']]

class Model:
    collection = None

    def __init__(self, collection):
        self.collection = collection

    def findAndCount(self, query = {}, limit=None, skip=0):
        return {
            'count': self.collection.count_documents(query),
            'items': self.collection.find(query, limit=limit, skip=skip)
        }

    def insert_many(self, list):
        self.collection.insert_many(list)

    def delete_many(self, query=None):
        if query:
            self.collection.delete_many(query)
        else:
            # this will delete all content of the collection
            self.collection.delete_many({})