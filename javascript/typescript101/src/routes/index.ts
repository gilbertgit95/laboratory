import express from 'express'
import config from '../config'

import users from './users'

const router = express.Router()
const env = config.env

// route for webapp static files
router.get(env.RootWebappEndpoint, express.static(env.WebappDir))

// routes for api
router.use(users)

export default router