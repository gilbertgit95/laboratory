import express from 'express'
import mongoose from 'mongoose'

import config from './config'
import routes from './routes'

const app = express()
const env = config.env

app.use(routes)

app.listen(env.AppPort, async () => {
    try {
        await mongoose.connect(env.ProdMongoURI, {
            dbName: env.ProdDBName
        })
        console.log(`- Successfully connected to database`)
    } catch (err) {
        console.log(`!Error, was not able to connect to the mongo database`)
        // throw(err)
    }
    console.log(`- Server is running on port: ${ env.AppPort }`)
})