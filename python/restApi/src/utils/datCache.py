from datetime import datetime

class DataCache:
    expTime = 60
    cache = {}

    def __init__(self, expTime):
        if expTime:
            self.expTime = expTime

    @classmethod
    def isValidOrExisted(self, key=''):
        # check if data exists
        if not key in self.cache:
            return False

        # check if data is still valid
        dateNow = datetime.now()
        cacheDate = self.cache[key]['timestamp']
        diff = (dateNow - cacheDate).total_seconds()
        if diff > self.expTime:
            return False
        
        return True

    @classmethod
    def set(self, key, value):
        # check if key is string
        if not isinstance(key, str):
            raise Exception('key should be a type string')

        self.cache[key] = {
            'data': value,
            'timestamp': datetime.now()
        }
        return None

    @classmethod
    def get(self, key):
        if not self.isValidOrExisted(key):
            return None

        return self.cache[key]['data']
    
    @classmethod
    def clean(self, key):
        del self.cache[key]
        return None
    
    @classmethod
    def cleanAll(self):
        self.cache = {}
        return None
