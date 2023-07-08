import expressListRoutes from 'express-list-routes'

import FeatureModel, { IFeature } from '../dataSource/models/featureModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataRequest'
import Config from '../config'

const env = Config.getEnv()

class FeatureController {
    public async getFeatures(pageInfo: IPgeInfo):Promise<IListOutput> {
        const featureReq = new DataRequest(FeatureModel)

        const result = await featureReq.getItemsByPage({},{}, {},pageInfo)

        return result
    }

    public async syncRoutesToFeatures(app:any):Promise<void> {
        const routes = expressListRoutes(app)

        console.log(routes)
    }
}

export default new FeatureController()