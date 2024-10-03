import uuid
import json
from utils.datCache import DataCache
from datasource.models.featureModel import featureModel

class FeatureController:
    cache = DataCache(expTime=10)

    @classmethod
    def getManyAndCount(self, query = {}, limit=None, skip=0):
        resp = featureModel.findAndCount(query, limit=limit, skip=skip)

        # return respData
        return list(resp['items']), resp['count']
    
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