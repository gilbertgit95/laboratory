class ClientInfoProvider {
    public async middleware(req:any, res:any, next:any) {
        req.clientInfo = {}
        console.log('ClientInfoProvider')
        next()
    }
}

export default (new ClientInfoProvider).middleware