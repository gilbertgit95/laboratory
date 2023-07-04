import express from 'express'
import swaggerUI from 'swagger-ui-express'

import config from '../config'
import swaggerData from '../../docs/swaggerDocs/index.json'
import appPackageInfo from '../../package.json'

const router = express.Router()
const env = config.getEnv()

// update some swagger data
// author, title, description, version, license, port, basePath
swaggerData.info.title = appPackageInfo.name
swaggerData.info.description = appPackageInfo.description
swaggerData.info.version = appPackageInfo.version
swaggerData.info.contact.email = appPackageInfo.author
swaggerData.info.license.name = appPackageInfo.license
swaggerData.host = `localhost:${ env.AppPort }`
swaggerData.basePath = env.RootApiEndpoint

router.use(env.RootApiEndpoint + 'apiDoc', swaggerUI.serve, swaggerUI.setup(swaggerData))

export default router