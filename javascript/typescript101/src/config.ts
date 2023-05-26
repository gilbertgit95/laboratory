import dotenv from 'dotenv'

dotenv.config()

interface Env {
    MongoConnStr: string,
    DataPagination: number,
    AppPort: number,
    WebappDir: string,
    RootWebappEndpoint: string
    RootApiEndpoint: string
}

const env: Env = {
    MongoConnStr: process.env.MONGO_PROD_CONNSTR? process.env.MONGO_PROD_CONNSTR: '',
    DataPagination: Number(process.env.DEFAULT_PAGINATION),
    AppPort: Number(process.env.SERVER_PORT),
    WebappDir: process.env.STATIC_DIR? process.env.STATIC_DIR: '',
    RootWebappEndpoint: process.env.ROOT_STATIC_ENDPOINT? process.env.ROOT_STATIC_ENDPOINT: '',
    RootApiEndpoint: process.env.ROOT_API_ENDPOINT? process.env.ROOT_API_ENDPOINT: '',
}

export { Env }
export default {
    env
}