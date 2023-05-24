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
        password: {
            key: '101',
        },
        passwordHistory: [
            {
                key: '101'
            }
        ],
        email: '',
        mobileNumber: '',
        clientDevices: [
            {
                clientInfo: '',
                lastUsageDate: new Date()
            }
        ],
        login: {
            limit: 15,
            type: 'login',
            key: 0,
            attempts: 0
        },
        reset: {
            limit: 15,
            type: 'password-reset',
            key: 0,
            attempts: 0
        }
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