import { openDB } from "idb";

import { DB_NAME, STORE_BEST, STORE_STAPLES, STORE_SPECIALTIES, STORE_CARDS } from './consts';
// const DATABASE_VERSION = 2;
// const db = idb.default;


// export const BUCKETS = ['Bucket01', 'Bucket02']
// export const BUSINESS_UNITS = ['BU1', 'BU2', 'BU3', 'BU4', 'BU5']
// export const STATUS = ['In Progress', 'Completed', 'Pending'] 
//https://hackernoon.com/use-indexeddb-with-idb-a-1kb-library-that-makes-it-easy-8p1f3yqq

interface StoreItem {
    key: string;
    value: any
}

let db: any = null;

const addToStore = async (item: StoreItem) => {
    //TODo add check if db is initialied
    db.put(STORE_CARDS, item.value, item.key);
}

const getFromStore = async (key: string) => {
    db.get(STORE_CARDS, key).then(console.log);
}

const getAllFromStore = async () => {
    db.getAll(STORE_CARDS).then(console.log);
}

const setupStore = async () => {
    db = await openDB(DB_NAME, 1, {
        upgrade(db) {
            db.createObjectStore(STORE_BEST);
            db.createObjectStore(STORE_STAPLES);
            db.createObjectStore(STORE_SPECIALTIES);
            db.createObjectStore(STORE_CARDS);
        }
    });
}

export {
    addToStore, getFromStore, getAllFromStore, setupStore
}