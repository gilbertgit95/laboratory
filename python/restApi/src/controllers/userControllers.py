import uuid
from utils.datCache import DataCache
from datasource.models.userModel import userModel

class UserController:
    cache = DataCache(expTime=30)

    @classmethod
    def getUserById(self, id):
        resp = None
        if self.cache.isValidOrExisted(id):
            resp = self.cache.get(id)
        else:
            resp = userModel.collection.find_one({'_id': id})

        return resp


userController = UserController()