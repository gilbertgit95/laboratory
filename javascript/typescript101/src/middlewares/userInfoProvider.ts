class UserInfoProvider {
    public async middleware(req:any, res:any, next:any) {
        req.userInfo = {}
        console.log('UserInfoProvider')
        next()
    }
}

export default (new UserInfoProvider).middleware