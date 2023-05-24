import { Schema, model } from 'mongoose'
const { randomUUID } = require('crypto')

// create interfaces
interface IPassword {
    _id?: String,
    key: String,
    retiredDate?: Date
}

interface IClientDevice {
    _id?: String,
    clientInfo: String,
    lastUsageDate?: Date
}

interface ILimitedTransaction {
    _id?: String,
    limit: Number,
    type?: string,
    key?: Number,
    attempts: Number
}

interface IUser {
    _id?: String,
    username: String,

    password: IPassword,
    passwordHistory: IPassword[],

    email: String,
    mobileNumber: String,
    clientDevices: IClientDevice[],

    login: ILimitedTransaction,
    reset: ILimitedTransaction
}

// create schemas
const PasswordSchema = new Schema<IPassword>({
    _id: { type: String, default: () => randomUUID()},
    key: { type: String, require: true },
    retiredDate: { type: Date, require: true }
}, { timestamps: true })
const ClientDeviceSchema = new Schema<IClientDevice>({
    _id: { type: String, default: () => randomUUID()},
    clientInfo: { type: String, require: true },
    lastUsageDate: { type: Date, require: false }
}, { timestamps: true })
const LimitedTransactionSchema = new Schema<ILimitedTransaction>({
    _id: { type: String, default: () => randomUUID()},
    limit: { type: Number, require: true },
    type: { type: String, require: false },
    key: { type: Number, require: false },
    attempts: { type: Number, require: true }
}, { timestamps: true })
const UserSchema = new Schema<IUser>({
    _id: { type: String, default: () => randomUUID()},
    username: { type: String, required: true },

    password: { type: PasswordSchema, required: false },
    passwordHistory: { type: [PasswordSchema], required: false },

    email: { type: String, required: false },
    mobileNumber: { type: String, required: false },
    clientDevices: { type: [ClientDeviceSchema], required: false },

    login: { type: LimitedTransactionSchema, required: false },
    reset: { type: LimitedTransactionSchema, required: false }
}, { timestamps: true })

// create model
const UserModel = model<IUser>('User', UserSchema)

export {
    IPassword,
    IClientDevice,
    ILimitedTransaction,
    IUser
}
export default UserModel
