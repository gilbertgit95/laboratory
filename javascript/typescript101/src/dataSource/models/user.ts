import { Schema, model } from 'mongoose'
const { randomUUID } = require('crypto')

// types
type TContactInfoType = 'email-address' | 'mobile-number' | 'telephone'
type TPasswordType = 'current' | 'old'
type TLimitedTransactionType = 'otp-signin' | 'pass-reset' | ''

// create interfaces
interface IRoleRef {
    _id?: String,
    roleId: String
}

interface IPassword {
    _id?: String,
    key: String,
    type: TPasswordType,
    disabled?: Boolean
}

interface IContactInfo {
    _id?: String,
    type: TContactInfoType,
    value: String,
    countryCode?: String,
    disabled?: Boolean
}

interface IClientDevice {
    _id?: String,
    countryCode?: String,
    clientInfo: String,
    lastUsageDate?: Date,
    disabled?: Boolean
}

interface ILimitedTransaction {
    _id?: String,
    limit: Number,
    type?: TLimitedTransactionType,
    key?: Number,
    attempts: Number,
    disabled?: Boolean
}

interface IUser {
    _id?: String,
    username: String,
    roles: [IRoleRef],

    passwords: [IPassword],

    contactInfos: IContactInfo[],
    clientDevices: IClientDevice[],

    limitedTransactions: ILimitedTransaction[],

    disabled?: Boolean
}

// create schemas
const RoleRefSchema = new Schema<IRoleRef>({
    _id: { type: String, default: () => randomUUID()},
    roleId: { type: String, require: true }
}, { timestamps: true })

const PasswordSchema = new Schema<IPassword>({
    _id: { type: String, default: () => randomUUID()},
    key: { type: String, require: true },
    type: { type: String, require: true },
    disabled: { type: Boolean, require: false, default: false }
}, { timestamps: true })

const ContactInfoSchema = new Schema<IContactInfo>({
    _id: { type: String, default: () => randomUUID()},
    type: { type: String, require: true },
    value: { type: String, require: true },
    countryCode: { type: String, require: false },
    disabled: { type: Boolean, require: false, default: false }
}, { timestamps: true })

const ClientDeviceSchema = new Schema<IClientDevice>({
    _id: { type: String, default: () => randomUUID()},
    clientInfo: { type: String, require: true },
    countryCode: { type: String, require: false },
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

    passwords: { type: [PasswordSchema], required: false },

    contactInfos: { type: [ContactInfoSchema], required: false },
    clientDevices: { type: [ClientDeviceSchema], required: false },

    limitedTransactions: { type: [LimitedTransactionSchema], required: false },

    disabled: { type: Boolean, require: false, default: false }
}, { timestamps: true })

// create model
const UserModel = model<IUser>('User', UserSchema)

export {
    TContactInfoType,
    TLimitedTransactionType,
    IRoleRef,
    IPassword,
    IContactInfo,
    IClientDevice,
    ILimitedTransaction,
    IUser
}
export default UserModel
