import { MongoClient, Callback, InsertOneResult, Document } from 'mongodb'

import { MongoDBAuditorStoreOptions } from './types'

export function createMongoDBAuditorStorage(
  options: MongoDBAuditorStoreOptions,
  callback?: Callback<InsertOneResult<Document>>
) {
  const { connectionString, database, collection } = options;
  const client = new MongoClient(connectionString)

  client.connect()

  const storeCollection = client.db(database).collection(collection)

  return async function (store: any) {
    if (callback) {
      storeCollection.insertOne(store, {}, callback)
    } else {
      storeCollection.insertOne(store)
    }
  }
}

export default createMongoDBAuditorStorage

export * from './types'
