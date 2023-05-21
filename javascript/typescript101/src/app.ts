import express from 'express'
import config, { Env } from './config'

const env: Env = config.env
const app = express()
// console.log('test')

// for (let [key, val] of Object.entries(config.env)) {
//     console.log(`${ key }: ${ val }`)
// }


app.get('/', (req, res) => {
    return res.send('Hello!')
})

app.listen(env.DEFAULT_PORT, () => {
    console.log(`Server is running on port: ${ env.DEFAULT_PORT }`)
})