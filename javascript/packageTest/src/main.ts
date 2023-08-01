import Platform, { IPlatform } from './utilities/platform'

class Main {
    public platforms:Platform[]

    constructor(platforms:IPlatform[]) {
        this.platforms = platforms.map(item => {
            return new Platform(item)
        })
    }

    public async execute():Promise<void> {
        console.log('execute the main process')
    }
}

export default Main