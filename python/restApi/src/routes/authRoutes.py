from flask import Blueprint
from controllers.authControllers import signinController, signoutController, signupController, forgotPasswordController, resetPasswordController

authRoutes = Blueprint('authRoutes', __name__)

@authRoutes.route('/signin')
def signinRoute():
    return signinController()

@authRoutes.route('/signout')
def signoutRoute():
    return signoutController()

@authRoutes.route('/signup')
def signupRoute():
    return signupController()

@authRoutes.route('/forgotPassword')
def forgotPasswordRoute():
    return forgotPasswordController()

@authRoutes.route('/resetpassword')
def resetpasswordRoute():
    return resetPasswordController()