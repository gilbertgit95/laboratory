class ReqError(Exception):
    code = None
    message = None
    def __init__(self, errData):
        if 'code' in errData.keys():
            self.code = errData['code']
        if 'message' in errData.keys():
            self.message = errData['message']

class Error:

    @staticmethod
    def errorHandler(func):
        def wrapper():
            resp = None
            statusCode = 200

            try:
                resp = func()
            except ReqError as error:
                # default response ans status
                statusCode = None
                resp = { 'message': None }

                # overWrite message
                if not error.message == None:
                    resp['message'] = error.message

                # error code handling and error code default message
                if error.code == 400:
                    statusCode = error.code
                    if error.message == None:
                        resp['message'] = 'Incorrect content in the request.'

                elif error.code == 401:
                    statusCode = error.code
                    if error.message == None:
                        resp['message'] = 'Unauthorized.'

                elif error.code == 403:
                    statusCode = error.code
                    if error.message == None:
                        resp['message'] = 'Forbidden access to resources.'

                elif error.code == 404:
                    statusCode = error.code
                    if error.message == None:
                        resp['message'] = 'Resource not found.'
                
                elif error.code == 405:
                    statusCode = error.code
                    if error.message == None:
                        resp['message'] = 'Not Allowed.'

                elif error.code == 409:
                    statusCode = error.code
                    if error.message == None:
                        resp['message'] = 'Conflict.'
                
                elif error.code == 423:
                    statusCode = error.code
                    if error.message == None:
                        resp['message'] = 'Locked.'

                else:
                    statusCode  = 500
                    resp = { 'message': 'Internal Server Error' }

            return resp, statusCode

        return wrapper