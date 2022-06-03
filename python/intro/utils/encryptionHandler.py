import os

def btoa(text):
    print(os.getenv('SECRET_KEY'))
    print('btoa')
    return 'hash'

def atob(hash):
    print(os.getenv('SECRET_KEY'))
    print('atob')
    return 'text'
