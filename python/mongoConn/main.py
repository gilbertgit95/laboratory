import os
import uuid
import pymongo
from dotenv import load_dotenv

load_dotenv()

def getCli():
    mongURL = os.getenv('MONGO_URL')
    mongoDB = os.getenv('MONGO_DB')

    mongoCli = pymongo.MongoClient(mongURL)
    db = mongoCli[mongoDB]
    logs = db['logs']

    return logs

def fetchLogs():
    cli = getCli()
    logs = cli.find()
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

