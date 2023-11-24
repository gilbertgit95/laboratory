from flask import Blueprint, request
from controllers.authControllers import signinController, signoutController, signupController, forgotPasswordController, resetPasswordController

authRoutes = Blueprint('authRoutes', __name__)

@authRoutes.route('/signin', methods=['POST'])
def signinRoute():
    return signinController()

@authRoutes.route('/signout', methods=['DELETE'])
def signoutRoute():
    paramData = {
        'param1': request.args.get('param1'),
        'param2': request.args.get('param2') 
    }
    bodyData = request.get_json()
    formData = {
        'form1': request.form.get('form1'),
        'form2': request.form.get('form2')
    }
    formEncodedData = {
        'sform1': request.form.get('sform1'),
        'sform2': request.form.get('sform2')
    }
    headerData = {
        'authorization': request.headers.get('authorization')
    }

    print(paramData)
    print(bodyData)
    print(formData)
    print(formEncodedData)
    print(headerData)

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