import express from 'express'
import requestIP from 'request-ip'

import Config from '../config'

import clientInfoProvider from '../middlewares/clientInfoProvider'
import userInfoProvider from '../middlewares/userInfoProvider'
import accessChecker from '../middlewares/accessChecker'

import documentationRoutes from './documentationRoutes'
import authRoutes from './authRoutes'
import featureRoutes from './featureRoutes'
import roleRoutes from './roleRoutes'
import userRoutes from './userRoutes'

const router = express.Router()
const env = Config.getEnv()

// public routes for static files
router.get(env.RootWebappEndpoint, express.static(env.RootWebappDir))
router.use(documentationRoutes)

// middlewares executed when accessing routes including auths
router.use(requestIP.mw())
router.use(clientInfoProvider)

// public routes without authorization
router.use(authRoutes)

// add middlewares for secured routes
router.use(userInfoProvider)
router.use(accessChecker)

// routes for data api needs authorization
router.use(featureRoutes)
router.use(roleRoutes)
router.use(userRoutes)

export default router