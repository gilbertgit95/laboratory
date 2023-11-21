from controllers.authControllers import authControllerTest

def authRouteTest():
    print(authControllerTest())
    return {
        'data': 'route testing data'
    }