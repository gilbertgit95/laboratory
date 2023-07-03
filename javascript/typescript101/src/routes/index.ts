import express from 'express'

import config from '../config'
import documentationRoutes from './documentationRoutes'
import userRoutes from './userRoutes'

const router = express.Router()
const env = config.getEnv()

// route for webapp static files
router.get(env.RootWebappEndpoint, express.static(env.RootWebappDir))

// routes for api documentaion
router.use(documentationRoutes)

// routes for data api
router.use(userRoutes)

export default router