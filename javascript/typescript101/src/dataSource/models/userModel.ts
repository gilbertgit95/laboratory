import { Schema, model } from 'mongoose'
import { randomUUID } from 'crypto'

// types
type TContactInfoType = 'email-address' | 'mobile-number' | 'telephone'
type TPasswordType = 'current' | 'old'
type TLimitedTransactionType = 'otp-signin' | 'pass-reset' | ''

// create interfaces
interface IRoleRef {
    _id?: string,
    roleId: string
}

interface IPassword {
    _id?: string,
    key: string,
    type: TPasswordType,
    disabled?: boolean
}

interface IContactInfo {
    _id?: string,
    type: TContactInfoType,
    value: string,
    countryCode?: string,
    disabled?: boolean
}

interface IClientDevice {
    _id?: string,
    countryCode?: string,
    clientInfo: string,
    lastUsageDate?: Date,
    disabled?: boolean
}

interface ILimitedTransaction {
    _id?: string,
    limit: number,
    type?: TLimitedTransactionType,
    key?: number,
    attempts: number,
    disabled?: boolean
}

interface IUser {
    _id?: string,
    username: string,
    roleRefs: [IRoleRef],

    passwords: [IPassword],

    contactInfos: IContactInfo[],
    clientDevices: IClientDevice[],

    limitedTransactions: ILimitedTransaction[],

    disabled?: boolean
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
    roleRefs: { type: [RoleRefSchema], required: true },

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
