import dotenv from 'dotenv'

dotenv.config()

interface Env {
    ProdMongoURI: string,
    ProdDBName: string,
    TestMongoURI: string,
    TestDBName: string,
    DataPagination: number,
    AppPort: number,
    WebappDir: string,
    RootWebappEndpoint: string
    RootApiEndpoint: string
}

const env: Env = {
    ProdMongoURI: process.env.PROD_MONGO_URI? process.env.PROD_MONGO_URI: '',
    ProdDBName: process.env.PROD_DB_NAME? process.env.PROD_DB_NAME: '',

    TestMongoURI: process.env.TEST_MONGO_URI? process.env.TEST_MONGO_URI: '',
    TestDBName: process.env.TEST_DB_NAME? process.env.TEST_DB_NAME: '',
    
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