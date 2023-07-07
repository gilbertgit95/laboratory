import Config from '../config'

const env = Config.getEnv()

interface IListOutput {
    items: any[],
    totalItems: number,
    page: number,
    pageSize: number,
    totalPages: number,
    nextURL: string | null
}

interface IPgeInfo {
    page: number,
    pageSize: number
}

class DataRequest {
    private DataModel:any

    constructor(DataModel:any) {
        this.DataModel = DataModel
    }

    public static getPageInfoQuery(queries:any):IPgeInfo {
        return {
            page: queries.page? parseInt(queries.page, 10): 1,
            pageSize: queries.pageSize? parseInt(queries.pageSize, 10): env.DafaultPagination
        }
    }

    public async getItem(query:any = {}):Promise<any> {
        const item = await this.DataModel.findOne(query)
        return item
    }

    public async getItems(query:any = {}, project:any = {}, options:any = {}):Promise<IListOutput> {
        const output:IListOutput = {
            items: [],
            totalItems: 0,
            page: 0,
            pageSize: 0,
            totalPages: 0,
            nextURL: null
        }

        output.items = await this.DataModel.find(query, project, options)
        output.totalItems = await this.DataModel.find(query).count()

        return output
    }

    public async getItemsByPage(query:any, project:any, options:any, pageOptions:IPgeInfo):Promise<IListOutput> {
        options.skip = (pageOptions.page - 1) * pageOptions.pageSize
        options.limit = pageOptions.pageSize

        const output = await this.getItems(query, project, options)

        // output.items is already populated correctly
        // output.totalItems is already populated correctly
        output.page = pageOptions.page
        output.pageSize = pageOptions.pageSize
        output.totalPages = Math.ceil(output.totalItems / output.pageSize)
        output.nextURL = output.page <= output.totalPages? null: `page=${ output.page + 1 }&pageSize=${ output.pageSize }`

        return output
    }



}

export {
    IListOutput,
    IPgeInfo
}
export default DataRequest