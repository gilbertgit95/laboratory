import { Schema, model } from 'mongoose'

// create interfaces
interface IRole {
    _id?: String,
    name: String,
    includedfeatures: []
    excludedFeatures: []
}

// create schemas


// create model