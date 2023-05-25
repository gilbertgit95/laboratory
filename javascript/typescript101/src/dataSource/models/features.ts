import { Schema, model } from 'mongoose'

// types:
// - api-route
// - ui-route
type FeatureType = 'api-route' | 'ui-route'

// create interfaces
interface IFeature {
    _id?: String,
    name: String, 
    type: FeatureType,
    value: String
}

// create schemas


// create model