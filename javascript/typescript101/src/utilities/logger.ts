import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

import Config from '../config'

const env = Config.getEnv()

class Logger {
    constructor() {
        console.log(env.AppLogsDirectory)
    }
    public async log() {

    }
}

export default Logger