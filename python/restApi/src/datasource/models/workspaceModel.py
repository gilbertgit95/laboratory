from .dbConn import mongoDB, Model

workspacesCollection = mongoDB['workspaces']

workspaceModel = Model(workspacesCollection)