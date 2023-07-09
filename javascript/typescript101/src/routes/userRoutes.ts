import express from 'express'

import UserModel, { IUser } from '../dataSource/models/userModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataQuery'
import Config from '../config'

import userController from '../controllers/userController'

const router = express.Router()
const env = Config.getEnv()

router.get(env.RootApiCoreEndpoint + 'users/:userId', async (req, res) => {
    const { userId } = req.params

    const result = await userController.getUser({_id: userId})

    return res.json(result)
})

router.get(env.RootApiCoreEndpoint + 'users', async (req, res) => {
    const pageInfo = DataRequest.getPageInfoQuery(req.query)

    const result = await userController.getUsers(pageInfo)

    return res.json(result)
})

router.post(env.RootApiCoreEndpoint + 'users', async (req, res) => {
    const user: IUser = {
        username: 'bertwo',
        passwords: [{
            key: '101',
            type: 'current'
        }],
        userInfo: [],
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

router.put(env.RootApiCoreEndpoint + 'users', async (req, res) => {
    return res.json([])
})

router.delete(env.RootApiCoreEndpoint + 'users', async (req, res) => {
    return res.json([])
})

export default router