import DataCache from '../utilities/dataCache'
import RoleModel, { IRole } from '../dataSource/models/roleModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataQuery'
import Config from '../config'

const env = Config.getEnv()

class RoleController {
    public cachedData:DataCache
    public request:DataRequest

    constructor() {
        this.cachedData = new DataCache(RoleModel, { stdTTL: 120, checkperiod: 120 })
        this.request = new DataRequest(RoleModel)
    }

    public async getRoles(pageInfo: IPgeInfo):Promise<IListOutput> {
        const roleReq = new DataRequest(RoleModel)

        const result = await roleReq.getItemsByPage({},{}, {},pageInfo)

        return result
    }
}

export default new RoleController()