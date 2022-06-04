import os
import base64
import bcrypt

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

