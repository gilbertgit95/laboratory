import uuid

def signinController(username, password, ua, ip):
    return {
        'data': 'signin route testing data'
    }

def signoutController():
    print('uuid4: ', str(uuid.uuid4()))
    return {
        'data': 'signout route testing data'
    }

def signupController():
    return {
        'data': 'signup route testing data'
    }

def forgotPasswordController():
    return {
        'data': 'forgotPassword route testing data'
    }

def resetPasswordController():
    return {
        'data': 'resetpassword route testing data'
    }