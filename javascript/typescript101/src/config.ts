import dotenv from 'dotenv'

dotenv.config()

interface Env {
    ExecType: string,

    MongoURI: string | undefined,
    DBName: string | undefined,

    AppPort: number,
    WebappDir: string,
    RootWebappEndpoint: string
    RootApiEndpoint: string,

    DafaultPagination: number
}

function getEnv():Env {
    const execType = process.env.EXEC_TYPE? process.env.EXEC_TYPE: 'PROD'

    return {
        ExecType: execType,

        MongoURI: process.env[`${ execType }_MONGO_URI`]? process.env[`${ execType }_MONGO_URI`]: '',
        DBName: process.env[`${ execType }_MONGO_DB_NAME`]? process.env[`${ execType }_MONGO_DB_NAME`]: '',

        AppPort: Number(process.env.SERVER_PORT),
        WebappDir: process.env.STATIC_DIR? process.env.STATIC_DIR: '',
        RootWebappEndpoint: process.env.ROOT_STATIC_ENDPOINT? process.env.ROOT_STATIC_ENDPOINT: '',
        RootApiEndpoint: process.env.ROOT_API_ENDPOINT? process.env.ROOT_API_ENDPOINT: '',

        DafaultPagination: Number(process.env.DEFAULT_PAGINATION)
    }
}

function setExecType(type:string):void {
    process.env.EXEC_TYPE = type
}

export { Env }
export default {
    getEnv,
    setExecType
}