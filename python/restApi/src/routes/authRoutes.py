from flask import Blueprint

authRoutes = Blueprint('authRoutes', __name__)

@authRoutes.route('/signin')
def signin():
    return {
        'data': 'signin route testing data'
    }

@authRoutes.route('/signout')
def signout():
    return {
        'data': 'signout route testing data'
    }

@authRoutes.route('/signup')
def signup():
    return {
        'data': 'signup route testing data'
    }

@authRoutes.route('/forgotPassword')
def forgotPassword():
    return {
        'data': 'forgotPassword route testing data'
    }

@authRoutes.route('/resetpassword')
def resetpassword():
    return {
        'data': 'resetpassword route testing data'
    }