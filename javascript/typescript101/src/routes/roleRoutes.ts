import express from 'express'

import RoleModel, { IRole } from '../dataSource/models/roleModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataQuery'
import Config from '../config'

import RoleController from '../controllers/roleController'

const router = express.Router()
const env = Config.getEnv()

router.get(env.RootApiCoreEndpoint + 'roles', async (req, res) => {
    const pageInfo = DataRequest.getPageInfoQuery(req.query)

    const result = await RoleController.getRoles(pageInfo)

    return res.json(result)
})

router.post(env.RootApiCoreEndpoint + 'roles', async (req, res) => {

    return res.json([])
})

router.put(env.RootApiCoreEndpoint + 'roles', async (req, res) => {
    return res.json([])
})

router.delete(env.RootApiCoreEndpoint + 'roles', async (req, res) => {
    return res.json([])
})

export default router