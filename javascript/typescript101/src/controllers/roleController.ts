import RoleModel, { IRole } from '../dataSource/models/roleModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataRequest'
import Config from '../config'

const env = Config.getEnv()

class RoleController {
    public async getRoles(pageInfo: IPgeInfo):Promise<IListOutput> {
        const roleReq = new DataRequest(RoleModel)

        const result = await roleReq.getItemsByPage({},{}, {},pageInfo)

        return result
    }
}

export default new RoleController()