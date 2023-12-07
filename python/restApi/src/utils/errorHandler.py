def errorHandler(func):
    result = None
    hasError = False

    try:
        result = func()
    except Exception as error:
        print(error)
        result = {
            'message': 'Internal Server Error',
            'code': 500
        }
        hasError  = True

    return result, hasError