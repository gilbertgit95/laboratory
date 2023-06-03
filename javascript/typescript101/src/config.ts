import dotenv from 'dotenv'

dotenv.config()

interface Env {
    ProdMongoURI: string,
    ProdDBName: string,
    TestMongoURI: string,
    TestDBName: string,

    AppPort: number,
    WebappDir: string,
    RootWebappEndpoint: string
    RootApiEndpoint: string,

    DafaultPagination: number
}

const env: Env = {
    ProdMongoURI: process.env.PROD_MONGO_URI? process.env.PROD_MONGO_URI: '',
    ProdDBName: process.env.PROD_MONGO_DB_NAME? process.env.PROD_MONGO_DB_NAME: '',
    TestMongoURI: process.env.TEST_MONGO_URI? process.env.TEST_MONGO_URI: '',
    TestDBName: process.env.TEST_MONGO_DB_NAME? process.env.TEST_MONGO_DB_NAME: '',
    
    AppPort: Number(process.env.SERVER_PORT),
    WebappDir: process.env.STATIC_DIR? process.env.STATIC_DIR: '',
    RootWebappEndpoint: process.env.ROOT_STATIC_ENDPOINT? process.env.ROOT_STATIC_ENDPOINT: '',
    RootApiEndpoint: process.env.ROOT_API_ENDPOINT? process.env.ROOT_API_ENDPOINT: '',

    DafaultPagination: Number(process.env.DEFAULT_PAGINATION)
}

export { Env }
export default {
    env
}