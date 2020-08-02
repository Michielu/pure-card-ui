import { idb } from "./idb";

// const DATABASE_VERSION = 2;
// const db = idb.default;

const DB_NAME = "DB1";
const STORE_NAME = "Store1"

// export const BUCKETS = ['Bucket01', 'Bucket02']
// export const BUSINESS_UNITS = ['BU1', 'BU2', 'BU3', 'BU4', 'BU5']
// export const STATUS = ['In Progress', 'Completed', 'Pending'] 
//https://hackernoon.com/use-indexeddb-with-idb-a-1kb-library-that-makes-it-easy-8p1f3yqq

// const createObjStore = () => {
//     openDB(DB_NAME, 1, {
//         upgrade(db) {
//             db.createObjectStore(STORE_NAME);
//         },
//     });
// }

// const addToStore = async () => {
//     const db1 = await openDB(DB_NAME, 1);
//     db1.add(STORE_NAME, 'value', 'key')
//         .then(result => {
//             console.log('success!', result);
//         })
//         .catch(err => {
//             console.error('error: ', err);
//         });
//     db1.close();
// }

const addToStore = async (key: string, value: any) => {
    (await idb.db1).put(STORE_NAME, value, key);
}

const getFromStore = async (key: string) => {
    (await idb.db1).get(STORE_NAME, key).then(console.log);
}

const getAllFromStore = async () => {
    (await idb.db1).getAll(STORE_NAME).then(console.log);
}

export {
    addToStore, getFromStore, getAllFromStore
}