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
    public async getItem(data:any):Promise<any> {
        let item = null

        // check if the user existed on the cache
        // if it existed, then return from cache
        if (data && data._id) {
            if (this.cache.has(data._id)) {
                const cacheData = this.cache.get(data._id)
                item = JSON.parse(typeof cacheData === 'string'? cacheData: '')
            } else {
                // else if not, then fetch user from database
                item = await this.request.getItem({_id: data._id})
                // then save the item to cache, then return item
                if (item && item._id) this.cache.set(item._id, JSON.stringify(item))
            }
        }

        return item
    }
}

export default DataCache