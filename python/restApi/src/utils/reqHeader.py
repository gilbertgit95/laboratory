from ua_parser import user_agent_parser

def getReqIP(request):
    return request.headers.get('X-Forwarded-For', request.headers.get('X-Real-IP', request.remote_addr))

def getUAInfo(request):
    ua = request.headers.get('User-Agent')
    if ua is None:
        ua = ''

    return user_agent_parser.Parse(ua)