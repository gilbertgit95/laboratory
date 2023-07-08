import DataCache from '../utilities/dataCache'
import UserModel, { IUser } from '../dataSource/models/userModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataQuery'
import Config from '../config'

const env = Config.getEnv()

class UserController {
    public cachedData:DataCache
    public request:DataRequest

    constructor() {
        this.cachedData = new DataCache(UserModel, { stdTTL: 120, checkperiod: 120 })
        this.request = new DataRequest(UserModel)
    }

    public async getUser(query:any):Promise<IUser|null> {
        return await this.cachedData.getItem(query)
    }

    public async getUsers(pageInfo: IPgeInfo):Promise<IListOutput> {
        const userReq:DataRequest = new DataRequest(UserModel)

        const result = await userReq.getItemsByPage({},{}, {},pageInfo)

        return result
    }

    public async saveUser(doc:any):Promise<any> {
        const userReq:DataRequest = new DataRequest(UserModel)

        const result = await userReq.createItem(doc)

        return result
    }
}

export default new UserController()