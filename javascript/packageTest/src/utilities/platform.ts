import Input from './input'

interface IType {
    id: string,
    name: string,
    description: string,
    dir: string
}

interface IPlatform {
    id: string,
    name: string,
    description: string,
    types: IType[]
}

class Platform {
    public info:IPlatform

    constructor(info:IPlatform) {
        this.info = info
    }

    public getTypeInfo(id:string):IType|null {
        let result:IType|null = null

        this.info.types.forEach(item => {
            if (item.id === id) result = item
        })

        return result
    }

    public async selectType():Promise<string | null> {
        const selectedType = await Input.selectInput({
            message: 'Please select apllication type',
            choices: this.info.types.map(item => {
                return {
                    title: item.name,
                    description: item.description,
                    value: item.id
                }
            })
        })

        return selectedType
    }
}

export {
    IType,
    IPlatform
}

export default Platform