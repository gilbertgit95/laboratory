from datasource.models.featureModel import featureModel
from datasource.models.roleModel import roleModel
from datasource.models.userModel import userModel
from datasource.models.workspaceModel import workspaceModel

from datasource.seeds.featuresSeed import features
from datasource.seeds.rolesSeed import roles
from datasource.seeds.usersSeed import users
from datasource.seeds.workspaceSeed import workspaces

def seed():
    print('seeding has started')

    print('seeding features collection')
    featureModel.insert_many(features)

    print('seeding roles collection')
    roleModel.insert_many(roles)

    print('seeding users collection')
    userModel.insert_many(users)

    print('seeding workspace collection')
    workspaceModel.insert_many(workspaces)

    print('seeding has ended')