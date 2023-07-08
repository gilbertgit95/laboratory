import DataCache from '../utilities/dataCache'
import FeatureModel, { IFeature } from '../dataSource/models/featureModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataQuery'
import Config from '../config'

const env = Config.getEnv()

class FeatureController {
    public cachedData:DataCache
    public request:DataRequest

    constructor() {
        this.cachedData = new DataCache(FeatureModel, { stdTTL: 120, checkperiod: 120 })
        this.request = new DataRequest(FeatureModel)
    }

    public async getFeatures(pageInfo: IPgeInfo):Promise<IListOutput> {
        const featureReq = new DataRequest(FeatureModel)

        const result = await featureReq.getItemsByPage({},{}, {},pageInfo)

        return result
    }
}

export default new FeatureController()