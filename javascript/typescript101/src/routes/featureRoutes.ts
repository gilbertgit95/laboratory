import express from 'express'

import FeatureModel, { IFeature } from '../dataSource/models/featureModel'
import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataQuery'
import Config from '../config'

import featureController from '../controllers/featureController'

const router = express.Router()
const env = Config.getEnv()

router.get(env.RootApiCoreEndpoint + 'features', async (req, res) => {
    const pageInfo = DataRequest.getPageInfoQuery(req.query)

    const result = await featureController.getFeatures(pageInfo)

    return res.json(result)
})

router.post(env.RootApiCoreEndpoint + 'features', async (req, res) => {

    return res.json([])
})

router.put(env.RootApiCoreEndpoint + 'features', async (req, res) => {
    return res.json([])
})

router.delete(env.RootApiCoreEndpoint + 'features', async (req, res) => {
    return res.json([])
})

export default router