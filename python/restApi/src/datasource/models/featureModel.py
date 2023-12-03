from .dbConn import mongoDB, Model

featuresCollection = mongoDB['features']

featureModel = Model(featuresCollection)