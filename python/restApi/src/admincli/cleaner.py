from datasource.models.featureModel import featureModel
from datasource.models.roleModel import roleModel
from datasource.models.userModel import userModel
from datasource.models.workspaceModel import workspaceModel

def cleanAll():
    print('cleaning has started')

    print('cleaning features collection')
    featureModel.delete_many()

    print('cleaning roles collection')
    roleModel.delete_many()

    print('cleaning users collection')
    userModel.delete_many()

    print('cleaning workspace collection')
    workspaceModel.delete_many()

    print('cleaning has ended')