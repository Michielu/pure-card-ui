import { openDB } from "idb";

import { DB_NAME, STORE_BEST, STORE_STAPLES, STORE_SPECIALTIES, STORE_CARDS, STORE_DEFAULT } from './consts';
//https://hackernoon.com/use-indexeddb-with-idb-a-1kb-library-that-makes-it-easy-8p1f3yqq

interface StoreItem {
    key: string;
    values: any[]
}

interface BestItem {
    category: string;
    bestCard: string;
}

let db: any = null;

const addToCardStore = async (item: StoreItem) => {
    if (db) {
        db.put(STORE_CARDS, item.values, item.key);
    }
}

const addToBestStore = async (item: BestItem) => {
    db.put(STORE_BEST, item.bestCard, item.category);
}

const addToStaplesStore = async (item: StoreItem) => {
    db.put(STORE_STAPLES, item.values, item.key);
}

const addToSpecialtiesStore = async (item: StoreItem) => {
    db.put(STORE_SPECIALTIES, item.values, item.key);
}

const addToDefaultStore = async (item: StoreItem) => {
    db.put(STORE_DEFAULT, item.values, item.key);
}

const getFromCardStore = async (key: string) => {
    if (db) {
        return db.get(STORE_CARDS, key);
    }
    return null;
}

const getFromBestStore = async (key: string) => {
    return db.get(STORE_BEST, key);
}
const getFromStaplesStore = async (key: string) => {
    return db.get(STORE_STAPLES, key);
}
const getFromSpecialtiesStore = async (key: string) => {
    return db.get(STORE_SPECIALTIES, key);
}
const getFromDefaultStore = async (key: string) => {
    return db.get(STORE_DEFAULT, key);
}
const getAllFromCardStore = async () => {
    console.log("DB", db)
    if (db) {
        return db.getAll(STORE_CARDS);
    } return null;
}
const getAllFromBestStore = async () => {
    return db.getAll(STORE_BEST);
}
const getAllFromStaplesStore: any = async () => {
    return db.getAll(STORE_STAPLES);
}
const getAllFromSpecialtiesStore: any = async () => {
    return db.getAll(STORE_SPECIALTIES);
}
const getAllFromDefaultStore: any = async () => {
    return db.getAll(STORE_DEFAULT);
}

const setupStore = async () => {
    db = await openDB(DB_NAME, 1, {
        upgrade(db) {
            db.createObjectStore(STORE_BEST);
            db.createObjectStore(STORE_STAPLES);
            db.createObjectStore(STORE_SPECIALTIES);
            db.createObjectStore(STORE_CARDS);
            db.createObjectStore(STORE_DEFAULT);
        }
    });
}

export {
    addToCardStore,
    addToBestStore,
    addToStaplesStore,
    addToSpecialtiesStore,
    addToDefaultStore,
    getFromCardStore,
    getFromBestStore,
    getFromStaplesStore,
    getFromSpecialtiesStore,
    getFromDefaultStore,
    getAllFromCardStore,
    getAllFromBestStore,
    getAllFromStaplesStore,
    getAllFromSpecialtiesStore,
    getAllFromDefaultStore,
    setupStore
}