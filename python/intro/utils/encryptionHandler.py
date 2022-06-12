import os
import base64
import bcrypt
import jwt
from datetime import datetime, timedelta

jwtAlgorithm = 'HS256'
jwtSecret = os.getenv('JWT_SECRET_KEY') if os.getenv('JWT_SECRET_KEY') else 'secret_key'
jwtExp = int(os.getenv('JWT_EXPIRATION')) if os.getenv('JWT_EXPIRATION') else 24

# encode text to base 64
def btoa(text):
    return base64.b64encode(text.encode())

# decode base 64 to text
def atob(hash):
    return base64.b64decode(hash).decode()

# encrypt password using bcrypt
def hash_password(pswd):
    return bcrypt.hashpw(pswd.encode(), bcrypt.gensalt()).decode()

# check text password if it matches the hash string
def compare_text_to_hash(text, hash):
    return bcrypt.checkpw(text.encode(), hash.encode())

# generate jwt
def generateJWT(obj):
    obj['exp'] = datetime.now() + timedelta(hours=jwtExp)
    return jwt.encode(obj, jwtSecret, algorithm=jwtAlgorithm)

# decode jwt string to extract encrypted obj
def decodeJWT(token):
    decodedToken = {}

    try:
        decodedToken = jwt.decode(token, jwtSecret, algorithms=jwtAlgorithm)
    except jwt.ExpiredSignatureError:
        decodedToken = { 'error': 'Token expired. Get new one' }
    except jwt.InvalidTokenError:
        decodedToken = { 'error': 'Invalid Token' }

    return decodedToken

