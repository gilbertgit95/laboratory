import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import config from '../config'
const env = config.getEnv()

function generateRandNumber():number {
    return Math.floor(1e5 + Math.random () * 9e5)
}

function btoa(text: string):string {
    return Buffer.from(text).toString('base64')
}

function atob(text: string):string {
    return Buffer.from(text, 'base64').toString('binary')
}

async function hashText(text: string):Promise<string> {
    let salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(text, salt)
}

async function verifyTextToHash(text: string, hash: string):Promise<boolean> {
    return await bcrypt.compare(text, hash)
}

function generateJWT(data: any):string {
    return jwt.sign(
        data, env.JwtSecretKey,
        { expiresIn: env.JwtExp * 3600 }
    )
}

async function verifyJWT(token: string):Promise<any> {
    return new Promise((resolve, reject) => {
        jwt.verify(token, env.JwtSecretKey, (err, decoded) => {
            if (!err) {
                resolve(decoded)
            } else {
                resolve(null)
            }
        })
    })
}

export {
    generateRandNumber,
    btoa,
    atob,
    hashText,
    verifyTextToHash,
    generateJWT,
    verifyJWT
}