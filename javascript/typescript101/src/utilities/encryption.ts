import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import Config from '../config'

const env = Config.getEnv()

class Encryption {
    public static generateRandNumber():number {
        return Math.floor(1e5 + Math.random () * 9e5)
    }
    
    public static  btoa(text: string):string {
        return Buffer.from(text).toString('base64')
    }
    
    public static  atob(text: string):string {
        return Buffer.from(text, 'base64').toString('binary')
    }
    
    public static async hashText(text: string):Promise<string> {
        let salt = await bcrypt.genSalt(10)
        return await bcrypt.hash(text, salt)
    }
    
    public static async verifyTextToHash(text: string, hash: string):Promise<boolean> {
        return await bcrypt.compare(text, hash)
    }
    
    public static  generateJWT(data: any):string {
        return jwt.sign(
            data, env.JwtSecretKey,
            { expiresIn: env.JwtExp * 3600 }
        )
    }
    
    public static async verifyJWT(token: string):Promise<any> {
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
}

export default Encryption