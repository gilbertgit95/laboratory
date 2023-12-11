from flask import Blueprint, request
from utils.config import config
from utils.routerUtils import RouterUtils
from controllers.featureController import featureController

featureRoutes = Blueprint('featureRoutes', __name__,  url_prefix=config['RootApiEndpoint'])

@featureRoutes.get('features')
@RouterUtils.clientinfoProvider
@RouterUtils.userInfoAndAccessProvider
def getMany(ua, ip, user):

    @RouterUtils.errorHandler
    def process():
        # raise Exception('Error')
        return featureController.getMany()

    resp, statusCode = process()

    return resp, statusCode