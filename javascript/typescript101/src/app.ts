import express from 'express'

import config from './config'
import routes from './routes'

const app = express()
const env = config.env

app.use(routes)

app.listen(env.AppPort, () => {
    console.log(`Server is running on port: ${ env.AppPort }`)
})