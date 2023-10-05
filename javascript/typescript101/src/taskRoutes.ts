import express from 'express'

// import UserModel, { IUser } from '../dataSource/models/userModel'
import ErrorHandler from '@kagiweb-tech/api-core-a/utils/errorHandler'
// import DataRequest, {IListOutput} from '@kagiweb-tech/api-core-a/utils/dataQuery'
// import Config from '@kagiweb-tech/api-core-a/utils/config'
import { routerIdentity } from '@kagiweb-tech/api-core-a/utils/appHandler'

import TaskModel, { ITask } from './taskModel'

const router = express.Router()
// const env = Config.getEnv()

router.get('/api/v1/tasks', async (req, res) => {
    const [result, statusCode] = await ErrorHandler.execute<ITask[]>(async () => {
        return await TaskModel.find()
    })

    return res.status(statusCode).send(result)
})

router.post('/api/v1/tasks', async (req, res) => {
    const [result, statusCode] = await ErrorHandler.execute<ITask>(async () => {
        return await TaskModel.create({
            title: 'task good',
            description: 'job'
        })
    })

    return res.status(statusCode).send(result)
})

routerIdentity.addAppRouteObj(router)
export default router