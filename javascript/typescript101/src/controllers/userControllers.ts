import UserModel, { IUser } from '../dataSource/models/userModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataRequest'
import config from '../config'

const env = config.getEnv()

async function getUsers(pageInfo: IPgeInfo):Promise<IListOutput> {
    const userReq = new DataRequest(UserModel)

    const result = await userReq.getItemsByPage({},{}, {},pageInfo)

    return result
}

export default {
    getUsers
}