import { Schema, model } from 'mongoose'
import { randomUUID } from 'crypto'

// types:
// - api-route
// - ui-route
type TFeatureType = 'api-route' | 'ui-route'

// create interfaces
interface IFeature {
    _id?: string,
    name?: string,
    type: TFeatureType,
    tags?: string[],
    value: string
}

// create schemas
const FeatureSchema = new Schema<IFeature>({
    _id: { type: string, default: () => randomUUID() },
    name: { type: string, required: false },
    type: { type: string, required: true },
    tags: { type: [string], required: false },
    value: { type: string, required: true }
})

// create model
const FeatureModel = model<IFeature>('Feature', FeatureSchema)

export {
    TFeatureType,
    IFeature
}

export default FeatureModel