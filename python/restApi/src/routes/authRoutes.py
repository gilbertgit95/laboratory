from flask import Blueprint, request
from utils.reqHeader import ReqHeader
from utils.errorHandler import ErrorHandler
from controllers.authControllers import authController

authRoutes = Blueprint('authRoutes', __name__)

@authRoutes.post('/signin')
def signinRoute():
    # get user agent info and ip address
    ua = ReqHeader.getUAInfo(request)
    ip = ReqHeader.getReqIP(request)

    # get cred info
    username = request.form.get('username')
    password = request.form.get('password')

    @ErrorHandler.wrap
    def process():
        # raise Exception('Error')
        return authController.signin(username, password, ua, ip)

    resp, statusCode = process()

    return resp, statusCode

@authRoutes.delete('/signout')
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

    return authController.signout()

@authRoutes.post('/signup')
def signupRoute():
    return authController.signup()

@authRoutes.post('/forgotPassword')
def forgotPasswordRoute():
    return authController.forgotPassword()

@authRoutes.put('/resetpassword')
def resetpasswordRoute():
    return authController.resetPassword()