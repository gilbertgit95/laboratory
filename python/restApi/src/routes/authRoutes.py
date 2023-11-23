from flask import Blueprint
from controllers.authControllers import signinController, signoutController, signupController, forgotPasswordController, resetPasswordController

authRoutes = Blueprint('authRoutes', __name__)

@authRoutes.route('/signin', methods=['POST'])
def signinRoute():
    return signinController()

@authRoutes.route('/signout', methods=['DELETE'])
def signoutRoute():
    return signoutController()

@authRoutes.route('/signup', methods=['POST'])
def signupRoute():
    return signupController()

@authRoutes.route('/forgotPassword', methods=['POST'])
def forgotPasswordRoute():
    return forgotPasswordController()

@authRoutes.route('/resetpassword', methods=['PUT'])
def resetpasswordRoute():
    return resetPasswordController()