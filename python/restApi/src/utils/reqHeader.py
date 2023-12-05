from user_agents import parse

def getReqIP(request):
    return request.headers.get('X-Forwarded-For', request.headers.get('X-Real-IP', request.remote_addr))

def getUAInfo(request):
    ua = request.headers.get('User-Agent')
    return parse(ua).browser
    # return ua