import UserModel, { IUser } from '../dataSource/models/userModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataRequest'
import Config from '../config'

const env = Config.getEnv()

class UserController {
    public async getUsers(pageInfo: IPgeInfo):Promise<IListOutput> {
        const userReq = new DataRequest(UserModel)

        const result = await userReq.getItemsByPage({},{}, {},pageInfo)

        return result
    }
}

export default new UserController()