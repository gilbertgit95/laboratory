import uuid

class AuthController:
    @classmethod
    def signin(self, username, password, ua, ip):
        return {
            'data': 'signin route testing data',
            'username': username,
            'password': password,
            'ua': ua,
            'ip': ip
        }

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