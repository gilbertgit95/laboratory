import express from 'express'

// import UserModel, { IUser } from '../dataSource/models/userModel'
import ErrorHandler from '@kagiweb-tech/api-core-a/utils/errorHandler'
// import DataRequest, {IListOutput} from '@kagiweb-tech/api-core-a/utils/dataQuery'
// import Config from '@kagiweb-tech/api-core-a/utils/config'
import routerIdentity from '@kagiweb-tech/api-core-a/utils/routerIdentity'

import NoteModel, { INote } from './noteModel'

const router = express.Router()
// const env = Config.getEnv()

router.get('/api/v1/notes', async (req, res) => {
    const [result, statusCode] = await ErrorHandler.execute<INote[]>(async () => {
        return await NoteModel.find()
    })

    return res.status(statusCode).send(result)
})

router.post('/api/v1/notes', async (req, res) => {
    const [result, statusCode] = await ErrorHandler.execute<INote>(async () => {
        return await NoteModel.create({
            title: 'good',
            description: 'job'
        })
    })

    return res.status(statusCode).send(result)
})

routerIdentity.addAppRouteObj(router)
export default router