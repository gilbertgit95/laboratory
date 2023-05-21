import config, { Env } from './config'

console.log('test')

for (let [key, val] of Object.entries(config.env)) {
    console.log(`${ key }: ${ val }`)
}

let env: Env = config.env