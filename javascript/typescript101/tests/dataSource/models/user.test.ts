import {
    connectDBForTesting,
    disconnectDBForTesting
} from '../dbConnect'

import UserModel, { IUser } from '../../../src/dataSource/models/user'

describe('User Model Testing', () => {
    beforeAll(async () => {
        await connectDBForTesting();
    })

    afterAll(async () => {
        await UserModel.collection.drop();
        await disconnectDBForTesting();
    })
})