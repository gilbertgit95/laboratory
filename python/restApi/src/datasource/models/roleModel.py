from .dbConn import mongoDB, Model

rolesCollection = mongoDB['roles']

roleModel = Model(rolesCollection)