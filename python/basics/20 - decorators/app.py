def authenticate(func):
    def wrapper():
        print('authentication ...')
        key = 'this_is_the_key143'
        func(key)

    return wrapper

@authenticate
def run(key):
    print(f'The auth key is: { key }')

run()