interface ITypes {
    id: string,
    name: string,
    description: string,
    dir: string
}

interface IPlatform {
    id: string,
    name: string,
    description: string,
    types: ITypes[]
}

class Platform {
    public info:IPlatform

    constructor(info:IPlatform) {
        this.info = info
    }
}

export {
    ITypes,
    IPlatform
}

export default Platform