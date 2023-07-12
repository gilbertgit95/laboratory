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
        return await this.cachedData.getItem(query._id)
    }

    public async getUsers(query:any = {}, pageInfo: IPgeInfo):Promise<IListOutput> {

        const result = await this.request.getItemsByPage(query, {}, {}, pageInfo)

        return result
    }

    public async saveUser(doc:IUser):Promise<IUser | null> {

        const result = await this.cachedData.createItem(doc)

        return result
    }

    public async updateUser(id:string, doc:IUser):Promise<IUser | null> {

        const result = await this.cachedData.updateItem(id, doc)

        return result
    }

    public async deleteUser(id:string):Promise<string> {

        const result = await this.cachedData.deleteItem(id)

        return id
    }
}

export default new UserController()