class AccessChecker {
    public async middleware(req:any, res:any, next:any) {
        console.log('AccessChecker')
        next()
    }
}

export default (new AccessChecker()).middleware