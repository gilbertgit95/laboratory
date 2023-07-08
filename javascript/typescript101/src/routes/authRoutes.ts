import express from 'express'
import expressListRoutes from 'express-list-routes'

import UserModel, { IUser } from '../dataSource/models/userModel'
import Config from '../config'

const env = Config.getEnv()
const router = express.Router()

router.post(env.RootApiCoreEndpoint + 'signin', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiCoreEndpoint + 'signinOTP', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiCoreEndpoint + 'signout', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiCoreEndpoint + 'signup', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiCoreEndpoint + 'forgotPassword', async (req, res) => {

    return res.json({})
})

router.post(env.RootApiCoreEndpoint + 'resetPassword', async (req, res) => {

    return res.json({})
})

export default router