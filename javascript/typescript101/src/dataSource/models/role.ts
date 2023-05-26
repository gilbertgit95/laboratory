import { Schema, model } from 'mongoose'
import { randomUUID } from 'crypto'
import { timeStamp } from 'console'

// Roles:
// - App Admin - has access to all
// - User Admin - has access to some Adminitrative features
// - Normal User - has access to some features

// create interfaces
interface IFeatureRef {
    _id?: string,
    featureId: string
}

interface IRole {
    _id?: string,
    name: string,
    includedfeatures: IFeatureRef[]
    excludedFeatures: IFeatureRef[]
}

// create schemas
const RoleRefSchema = new Schema<IFeatureRef>({
    _id: { type: string, default: () => randomUUID() },
    featureId: { type: string, required: true }
}, { timestamps: true })

const RoleSchema = new Schema<IRole>({
    _id: { type: string, default: () => randomUUID() },
    name: { type: string, required: true },
    includedfeatures: { type: [RoleRefSchema], required: false },
    excludedFeatures: { type: [RoleRefSchema], required: false },
}, { timestamps: true })

// create model
const RoleModel = model<IRole>('Role', RoleSchema)

export {
    IFeatureRef,
    IRole
}
export default RoleModel