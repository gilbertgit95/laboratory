import dotenv from 'dotenv'

dotenv.config()

interface Env {
    MONGO_CONN_STR: string,
    DEFAULT_DATA_PAGINATION: number,
    DEFAULT_PORT: number
}

let env: Env = {
    MONGO_CONN_STR: process.env.MONGO_CONN_STR? process.env.MONGO_CONN_STR: '',
    DEFAULT_DATA_PAGINATION: Number(process.env.DEFAULT_DATA_PAGINATION),
    DEFAULT_PORT: Number(process.env.DEFAULT_PORT)
}

export { Env }
export default {
    env: env
}