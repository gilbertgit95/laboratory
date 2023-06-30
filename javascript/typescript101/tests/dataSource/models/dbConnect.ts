import mongoose from 'mongoose';
import config from '../../../src/config'

config.setExecType('TEST')
const env = config.getEnv()

export async function connectDBForTesting() {
  try {
    await mongoose.connect(env.MongoURI? env.MongoURI: '', {
      dbName: env.DBName,
      autoCreate: true,
    });
  } catch (error) {
    console.log('DB connect error');
  }
}

export async function disconnectDBForTesting() {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.log('DB disconnect error');
  }
}