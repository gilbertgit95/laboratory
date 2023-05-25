import { Schema, model } from 'mongoose'

// Roles:
// - App Admin - has access to all
// - User Admin - has access to some Adminitrative features
// - Normal User - has access to some features

// create interfaces
interface IRole {
    _id?: String,
    name: String,
    includedfeatures: []
    excludedFeatures: []
}

// create schemas


// create model

export {
    IRole
}