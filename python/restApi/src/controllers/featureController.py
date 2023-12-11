import uuid
from utils.datCache import DataCache

class FeatureController:
    cache = DataCache(expTime=10)

    @classmethod
    def getMany(self):
        respData = {}

        return respData
    
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