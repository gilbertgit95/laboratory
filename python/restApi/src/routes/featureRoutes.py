from flask import Blueprint, request
from utils.config import config
from utils.routerUtils import RouterUtils
from utils.error import Error
from controllers.featureController import featureController

featureRoutes = Blueprint('featureRoutes', __name__,  url_prefix=config['RootApiEndpoint'])

@featureRoutes.get('features')
@RouterUtils.clientinfoProvider
@RouterUtils.userInfoAndAccessProvider
def getMany(ua, ip, user):

    @Error.errorHandler
    @RouterUtils.paggination
    def process(page, pageSize):
        # raise Exception('Error')
        # print(f'page: {page}', f'pageSize: {pageSize}')
        limit = pageSize
        skip = (page - 1) * pageSize

        return featureController.getManyAndCount({}, limit=limit, skip=skip )

    resp, statusCode = process()

    return resp, statusCode