import os
import uuid
import pymongo
from dotenv import load_dotenv

load_dotenv()

def getCli():
    collection = 'logs'
    mongURL = os.getenv('MONGO_URL')
    mongoDB = os.getenv('MONGO_DB')

    mongoCli = pymongo.MongoClient(mongURL)

    if mongoDB in mongoCli.list_database_names():
        print("The database exists.")
    else:
        print("The database does not exist.")
        return

    db = mongoCli[mongoDB]

    if collection in db.list_collection_names():
        print("The collection exists.")
    else:
        print("The collection does not exist.")
        return

    return db[collection]

def fetchLogs(filter = {}):
    cli = getCli()
    logs = cli.find(filter)
    result = []

    for log in logs:
        result.append(log)

    return result

def createLog(obj):
    obj['_id'] = str(uuid.uuid4())

    cli = getCli()
    cli.insert_one(obj)

    return None

def main():
    # createLog({
    #     'event': 'click',
    #     'details': 'open a modal box'
    # })
    logs = fetchLogs()
    print(logs)

    return None

main()

