import Platform, { IPlatform, IType } from './utilities/platform'
import Input, { ISelectInput } from './utilities/input'

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
        console.log('cli started')

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

        console.log('selected result: ', SelectedPlatform?.info, SelectedTypeInfo)

        console.log('cli ended')
    }
}

export default Main