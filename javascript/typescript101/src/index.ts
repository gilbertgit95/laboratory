import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import appHandler from '@kagiweb-tech/api-core-a'
import noteRoutes from './noteRoutes'
import taskRoutes from './taskRoutes'

// register routes
// register public routes
appHandler.addPublicRoute(noteRoutes)
// register private routes
appHandler.addPrivateRoute(taskRoutes)

const env = appHandler.getEnv()
const appRoutes = appHandler.getAppRoutes()
const app = express().use(appRoutes)

app.listen(env.AppPort, async () => {
    try {
        await appHandler.dbConnect()
        console.log(`- Successfully connected to database`)
        await appHandler.executePostDBConnectionProcess()
        console.log(`- Execute post db conection process`)
    } catch (err) {
        console.log(`!Error, was not able to connect to the mongo database: ${ err }`)
        // throw(err)
    }
    console.log(`- Server is running on port: ${ env.AppPort }`)
})