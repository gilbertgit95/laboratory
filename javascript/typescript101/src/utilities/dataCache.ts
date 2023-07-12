import NodeCache from 'node-cache'

import DataRequest, { IListOutput, IPgeInfo } from '../utilities/dataQuery'

class DataCache {
    public cache:NodeCache
    public request:DataRequest

    constructor(DataModel:any, cachingOptions:any = {}) {
        this.cache = new NodeCache(cachingOptions)
        this.request = new DataRequest(DataModel)
    }

    /**
     * @param data - atleast field _id existed on this parameter
     */
    public async getItem(id:string):Promise<any> {
        let item = null

        // check if the user existed on the cache
        // if it existed, then return from cache
        if (id) {
            if (this.cache.has(id)) {
                const cacheData = this.cache.get(id)
                item = JSON.parse(typeof cacheData === 'string'? cacheData: '')
            } else {
                // else if not, then fetch user from database
                item = await this.request.getItem({_id: id})
                // then save the item to cache, then return item
                if (item && item._id) this.cache.set(item._id, JSON.stringify(item))
            }
        }

        return item
    }

    public async createItem(doc:any):Promise<any | null> {
        let result = null

        if (doc._id) {
            result = await this.request.createItem(doc)

            this.cache.set(result._id, JSON.stringify(result))
        }

        return result
    }

    public async updateItem(id:string, doc:any):Promise<any | null> {
        let result = null

        if (id) {
            result = await this.request.updateItem({_id: id}, doc)

            this.cache.set(result._id, JSON.stringify(result))
        }

        return result
    }

    public async deleteItem(id:string):Promise<string | null> {
        let result = null

        if (id) {
            result = await this.request.deleteItem({_id: id})
            if (this.cache.has(id)) this.cache.del(id)
        }

        return result
    }
}

export default DataCache