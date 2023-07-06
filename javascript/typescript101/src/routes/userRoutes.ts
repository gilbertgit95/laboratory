import express from 'express'

import UserModel, { IUser } from '../dataSource/models/userModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataRequest'
import config from '../config'

const router = express.Router()
const env = config.getEnv()

router.get(env.RootApiEndpoint + 'users', async (req, res) => {
    const pageInfo = DataRequest.getPageInfoQuery(req.query)
    const userReq = new DataRequest(UserModel)

    const result = await userReq.getItemsByPage({},{}, {},pageInfo)

    return res.json(result)
})

router.post(env.RootApiEndpoint + 'users', async (req, res) => {
    const user: IUser = {
        username: 'bertwo',
        passwords: [{
            key: '101',
            type: 'current'
        }],
        roleRefs: [
            {
                roleId: ''
            }
        ],
        contactInfos: [],
        clientDevices: [],
        limitedTransactions: [
            {
                limit: 15,
                type: 'otp-signin',
                key: 0,
                attempts: 0
            },
            {
                limit: 15,
                type: 'pass-reset',
                key: 0,
                attempts: 0
            },
            {
                limit: 15,
                type: '',
                key: 0,
                attempts: 0
            }
        ]
    }
    const savedUser = await UserModel.create(user)
    return res.json(savedUser)
})

router.put(env.RootApiEndpoint + 'users', async (req, res) => {
    return res.json([])
})

router.delete(env.RootApiEndpoint + 'users', async (req, res) => {
    return res.json([])
})

export default router