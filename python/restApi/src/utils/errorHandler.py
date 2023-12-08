class ErrorHandler:

    @staticmethod
    def wrap(func):
        def wrapper():
            resp = None
            statusCode = 200

            try:
                resp = func()
            except Exception as error:
                print(error)
                resp = {
                    'message': 'Internal Server Error'
                }
                statusCode  = 500

            return resp, statusCode
        
        return wrapper