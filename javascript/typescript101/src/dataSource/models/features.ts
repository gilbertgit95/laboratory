import { Schema, model } from 'mongoose'
import { randomUUID } from 'crypto'

// types:
// - api-route
// - ui-route
type TFeatureType = 'api-route' | 'ui-route'

// create interfaces
interface IFeature {
    _id?: String,
    name?: String,
    type: TFeatureType,
    tags?: String[],
    value: String
}

// create schemas
const FeatureSchema = new Schema<IFeature>({
    _id: { type: String, default: () => randomUUID() },
    name: { type: String, required: false },
    type: { type: String, required: true },
    tags: { type: [String], required: false },
    value: { type: String, required: true }
})

// create model
const FeatureModel = model<IFeature>('Feature', FeatureSchema)

export {
    TFeatureType,
    IFeature
}

export default FeatureModel