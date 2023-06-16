import mongoose from 'mongoose';
import config from '../../../src/config'

const env = config.env

export async function connectDBForTesting() {
  try {
    await mongoose.connect(env.TestMongoURI, {
      dbName: env.TestDBName,
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