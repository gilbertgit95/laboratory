#!/usr/bin/env node

interface IUserInfo {
    name: string,
    email: string
}

console.log('testing package')

export default {
    getInfo():IUserInfo|null {
        const user:IUserInfo = {
            name: 'test',
            email: 'test'
        }
        return user
    }
}