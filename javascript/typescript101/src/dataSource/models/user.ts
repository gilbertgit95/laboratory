import { Schema, model } from 'mongoose'
const { randomUUID } = require('crypto')

// types
type TLimitedTransactionType = 'sign-in' | 'pass-reset' | ''

// create interfaces
interface IRoleRef {
    _id?: String,
    roleId: String
}

interface IPassword {
    _id?: String,
    key: String,
    retiredDate?: Date
}

interface IClientDevice {
    _id?: String,
    clientInfo: String,
    lastUsageDate?: Date,
    disabled: Boolean
}

interface ILimitedTransaction {
    _id?: String,
    limit: Number,
    type?: TLimitedTransactionType,
    key?: Number,
    attempts: Number,
    disabled: Boolean
}

interface IUser {
    _id?: String,
    username: String,
    roles: [IRoleRef],

    password: IPassword,
    passwordHistory: IPassword[],

    email: String,
    mobileNumber: String,
    clientDevices: IClientDevice[],

    signIn: ILimitedTransaction,
    otpSignIn: ILimitedTransaction,
    credReset: ILimitedTransaction,
    globalReset: ILimitedTransaction,

    disabled: Boolean
}

// create schemas
const RoleRefSchema = new Schema<IRoleRef>({
    _id: { type: String, default: () => randomUUID()},
    roleId: { type: String, require: true }
}, { timestamps: true })

const PasswordSchema = new Schema<IPassword>({
    _id: { type: String, default: () => randomUUID()},
    key: { type: String, require: true },
    retiredDate: { type: Date, require: true }
}, { timestamps: true })

const ClientDeviceSchema = new Schema<IClientDevice>({
    _id: { type: String, default: () => randomUUID()},
    clientInfo: { type: String, require: true },
    lastUsageDate: { type: Date, require: false },
    disabled: { type: Boolean, require: false, default: false }
}, { timestamps: true })

const LimitedTransactionSchema = new Schema<ILimitedTransaction>({
    _id: { type: String, default: () => randomUUID()},
    limit: { type: Number, require: true },
    type: { type: String, require: false },
    key: { type: Number, require: false },
    attempts: { type: Number, require: true },
    disabled: { type: Boolean, require: false, default: false }
}, { timestamps: true })

const UserSchema = new Schema<IUser>({
    _id: { type: String, default: () => randomUUID()},
    username: { type: String, required: true },
    roles: { type: [RoleRefSchema], required: true },

    password: { type: PasswordSchema, required: false },
    passwordHistory: { type: [PasswordSchema], required: false },

    email: { type: String, required: false },
    mobileNumber: { type: String, required: false },
    clientDevices: { type: [ClientDeviceSchema], required: false },

    signIn: { type: LimitedTransactionSchema, required: false },
    otpSignIn: { type: LimitedTransactionSchema, required: false },
    credReset: { type: LimitedTransactionSchema, required: false },
    globalReset: { type: LimitedTransactionSchema, required: false },

    disabled: { type: Boolean, require: false, default: false }
}, { timestamps: true })

// create model
const UserModel = model<IUser>('User', UserSchema)

export {
    TLimitedTransactionType,
    IRoleRef,
    IPassword,
    IClientDevice,
    ILimitedTransaction,
    IUser
}
export default UserModel
