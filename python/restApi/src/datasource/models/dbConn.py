import pymongo
from utils.config import config

mongoClient = pymongo.MongoClient(config.MongoURI)
mongoDB = mongoClient[config.DBName]