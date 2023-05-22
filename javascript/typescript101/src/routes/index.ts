import express from 'express'

import config from '../config'

const router = express.Router()
const env = config.env

router.get(env.RootWebappEndpoint, express.static(env.WebappDir))

router.get(env.RootApiEndpoint, (req, res) => {
    return res.send('Hello!')
})

export default router