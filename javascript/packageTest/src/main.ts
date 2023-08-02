import Platform, { IPlatform } from './utilities/platform'
import Input from './utilities/input'
import { logo } from './config'

class Main {
    private platforms:Platform[]

    constructor(platforms:IPlatform[]) {
        this.platforms = platforms.map(item => {
            return new Platform(item)
        })
    }

    private getPlatform(id:string):Platform|null {
        let result:Platform|null = null

        this.platforms.forEach(item => {
            if (item.info.id === id) result = item
        })

        return result
    }

    public async execute():Promise<void> {
        console.log(logo)

        console.log(` - Welcome to kagiweb-cli! Please be noted that this app will populate base code and files inside the current folder:`)
        console.log(` - ${ __dirname }`)
        console.log(` - Choose Kagiweb base code you wanted to develop.`)
        console.log('\n')

        // let user select platforms
        const platformSelection = await Input.selectInput({
            message: 'Please select application Platform.',
            choices: this.platforms.map(item => {
                return {
                    title: item.info.name,
                    description: item.info.description,
                    value: item.info.id
                }
            })
        })

        // get selected platform
        const SelectedPlatform = this.getPlatform(platformSelection? platformSelection: '')
        // execute selected platform
        
        const SelectedType = SelectedPlatform? await SelectedPlatform.selectType(): null
        const SelectedTypeInfo = SelectedPlatform?.getTypeInfo(SelectedType? SelectedType: '')

        console.log('\n')
        console.log(` - Processing: ${ SelectedPlatform?.info.id } -> ${ SelectedTypeInfo?.id }`)
        console.log(' - This app is still on development.')
        console.log(' - Done generating base code!')
    }
}

export default Main