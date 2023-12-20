import uuid
from utils.datCache import DataCache
from utils.error import ReqError
from controllers.userControllers import userController
from datasource.models.userModel import userModel

class AuthController:
    cache = DataCache(expTime=10)

    @classmethod
    def signin(self, username, password, ua, ip):
        # fetch user data
        user = userModel.collection.find_one({'username': username})
        # check if user exist, if not raise 404
        if not user:
            raise ReqError({'code': 404, 'message': 'User does not exist'})
        # check if user exist and user is not disabled, if not raise 423


        # if user exist then encrement the user signin limited transaction
        # check if the signin limited transaction is valid, if not then disable the user and raise 423

        # check if password is correct
        # then check ig otp signin is enabled, if enabled, then generate otp and save it to otp signin limited transaction
        # also return a message

        # if otp signin is disabled, then generate jwt
        # then upsert device and insert the jwt along with ip inside devices -> accessTokens
        # then reset signin limited transaction

        # lastly clean the invalid tokens
        respData = {}

        if self.cache.isValidOrExisted('test'):
            respData = self.cache.get('test')
            print('isValidOrExisted!')
        else:
            data = {
                'data': 'signin route testing data',
                'username': username,
                'password': password,
                'ua': ua,
                'ip': ip
            }
            self.cache.set('test', data)
            respData = data
            print('not isValidOrExisted!')

        return respData

    @classmethod
    def signout(self):
        print('uuid4: ', str(uuid.uuid4()))
        return {
            'data': 'signout route testing data'
        }

    @classmethod
    def signup(self):
        return {
            'data': 'signup route testing data'
        }

    @classmethod
    def forgotPassword(self):
        return {
            'data': 'forgotPassword route testing data'
        }

    @classmethod
    def resetPassword(self):
        return {
            'data': 'resetpassword route testing data'
        }

authController = AuthController()