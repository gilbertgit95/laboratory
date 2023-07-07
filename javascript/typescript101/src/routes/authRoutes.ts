import express from 'express'

import UserModel, { IUser } from '../dataSource/models/userModel'
import Config from '../config'

const env = Config.getEnv()
const router = express.Router()

router.post(env.RootApiEndpoint + 'signin', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiEndpoint + 'signinOTP', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiEndpoint + 'signout', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiEndpoint + 'signup', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiEndpoint + 'forgotPassword', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiEndpoint + 'resetPassword', async (req, res) => {

    return res.json({})
})

export default router