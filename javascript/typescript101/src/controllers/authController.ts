import UserModel, { IUser } from '../dataSource/models/userModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataRequest'
import Config from '../config'

const env = Config.getEnv()

class AuthController {
    public async signin(pageInfo: IPgeInfo):Promise<IUser | null> {
        const userReq = new DataRequest(UserModel)

        const result = await userReq.getItem()

        return result
    }

    public async signinOTP(pageInfo: IPgeInfo):Promise<IUser | null> {
        const userReq = new DataRequest(UserModel)

        const result = await userReq.getItem()

        return result
    }

    public async signout(pageInfo: IPgeInfo):Promise<IUser | null> {
        const userReq = new DataRequest(UserModel)

        const result = await userReq.getItem()

        return result
    }

    public async signup(pageInfo: IPgeInfo):Promise<IUser | null> {
        const userReq = new DataRequest(UserModel)

        const result = await userReq.getItem()

        return result
    }

    public async forgotPassword(pageInfo: IPgeInfo):Promise<IUser | null> {
        const userReq = new DataRequest(UserModel)

        const result = await userReq.getItem()

        return result
    }

    public async resetPassword(pageInfo: IPgeInfo):Promise<IUser | null> {
        const userReq = new DataRequest(UserModel)

        const result = await userReq.getItem()

        return result
    }
}

export default new AuthController()