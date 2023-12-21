import math
from flask import request
from ua_parser import user_agent_parser
from utils.config import config

class RouterUtils:
    @staticmethod
    def paggination(func):
        def wrapper():
            page = request.args.get('page')
            pageSize = request.args.get('pageSize')
            resp = {
                'items': [],
                'totalItems': 0,
                'page': 0,
                'pageSize': 0,
                'totalPages': 0,
                'nextURL': None
            }

            page = int(page) if not page == None else 0
            pageSize = int(pageSize) if not pageSize == None else config['DafaultPagination']
            items, totalItems = func(page=page, pageSize=pageSize)
            totalPages = math.ceil(totalItems/pageSize)
            hasNextUrl = page < totalPages

            resp['page'] = page
            resp['pageSize'] = pageSize
            resp['items'] = items
            resp['totalItems'] = totalItems
            resp['totalPages'] = totalPages
            resp['nexURL'] = f'page={ page + 1 }&pageSize={ pageSize }' if hasNextUrl else None

            return resp

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