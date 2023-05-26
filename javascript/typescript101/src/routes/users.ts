import express from 'express'

import UserModel, { IUser } from '../dataSource/models/user'
import config from '../config'

const router = express.Router()
const env = config.env

router.get(env.RootApiEndpoint + 'users', async (req, res) => {
    let users = await UserModel.find()
    // console.log(users)
    return res.json(users)
})

router.post(env.RootApiEndpoint + 'users', async (req, res) => {
    let user: IUser = {
        username: 'bertwo',
        passwords: [{
            key: '101',
            type: 'current'
        }],
        roles: [
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
    let savedUser = await UserModel.create(user)
    return res.json(savedUser)
})

router.put(env.RootApiEndpoint + 'users', async (req, res) => {
    return res.json([])
})

router.delete(env.RootApiEndpoint + 'users', async (req, res) => {
    return res.json([])
})

export default router