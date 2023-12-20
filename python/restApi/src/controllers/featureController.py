import uuid
import json
from utils.datCache import DataCache
from datasource.models.userModel import userModel

class FeatureController:
    cache = DataCache(expTime=10)

    @classmethod
    def getMany(self):
        respData = userModel.collection.find({})

        print(respData[0])
        # return json.dumps(respData)
        # return respData
        return respData[0]
    
    @classmethod
    def getOne():
        pass

    @classmethod
    def create():
        pass

    @classmethod
    def update():
        pass

    @classmethod
    def delete():
        pass

featureController = FeatureController()