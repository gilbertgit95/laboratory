import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

import Config from '../config'

const env = Config.getEnv()
const { combine, timestamp, printf } = format

interface ILogParams {
    level: string,
    message: string
}

class Logger {
    public logger
    constructor(logCollection:string|null) {
        this.logger = createLogger({
            transports: [
                new transports.Console(),
                new DailyRotateFile({
                    filename: (typeof logCollection === 'string')? `${ env.AppLogsDirectory }/${ logCollection }/%DATE%.log`: `${ env.AppLogsDirectory }/%DATE%.log`,
                    datePattern: 'YYYY-MM-DD-HH',
                    zippedArchive: true,
                    maxSize: '20m',
                    maxFiles: '365d'
                })
            ],
            format: combine(
                timestamp(),
                printf(({ level, message, timestamp }) => {
                    return `${ timestamp } [${ level }]: ${ message }`
                })
            )
        })
    }

    public log(obj:ILogParams) {
        this.logger.log(obj)
    }
}

const errorLogsColl = new Logger('errorLogs')
const combinedLogsColl = new Logger('combinedLogs')

export {
    ILogParams,
    errorLogsColl,
    combinedLogsColl
}

export default Logger