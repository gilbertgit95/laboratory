#!/usr/bin/env node

console.log('testing package');

module.exports = {
    getInfo() {
        return {
            name: 'gilbert cuerbo',
            birthday: '199-04-27',
            age: 28
        }
    }
};