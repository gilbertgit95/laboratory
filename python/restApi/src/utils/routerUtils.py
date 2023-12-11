from flask import request
from ua_parser import user_agent_parser

class RouterUtils:

    @staticmethod
    def errorHandler(func):
        def wrapper():
            resp = None
            statusCode = 200

            # resp = func()
            try:
                resp = func()
            except Exception as error:
                print('Error!', error)
                resp = {
                    'message': 'Internal Server Error'
                }
                statusCode  = 500

            return resp, statusCode
        
        return wrapper

    @staticmethod
    def clientinfoProvider(func):
        def wrapper():
            userAgent = request.headers.get('User-Agent')
            if userAgent is None:
                userAgent = ''

            ua = user_agent_parser.Parse(userAgent)
            ip = request.headers.get(
                'X-Forwarded-For',
                request.headers.get('X-Real-IP', request.remote_addr)
            )
            return func(ua=ua, ip=ip)

        return wrapper

    @staticmethod
    def userInfoAndAccessProvider(func):
        def wrapper(ua, ip):
            userData = {
                'name': 'test name'
            }
            return func(ua=ua, ip=ip, user=userData)

        return wrapper