import { openDB } from "idb";

import { DB_NAME, STORE_BEST, STORE_STAPLES, STORE_SPECIALTIES, STORE_CARDS } from './consts';
//https://hackernoon.com/use-indexeddb-with-idb-a-1kb-library-that-makes-it-easy-8p1f3yqq

interface StoreItem {
    key: string;
    value: any
}

let db: any = null;

const addToCardStore = async (item: StoreItem) => {
    if (db) {
        db.put(STORE_CARDS, item.value, item.key);
    }
}

const addToBestStore = async (item: StoreItem) => {
    db.put(STORE_BEST, item.value, item.key);
}

const addToStaplesStore = async (item: StoreItem) => {
    db.put(STORE_STAPLES, item.value, item.key);
}

const addToSpecialtiesStore = async (item: StoreItem) => {
    db.put(STORE_SPECIALTIES, item.value, item.key);
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
const getAllFromCardStore = async () => {
    console.log("DB", db)
    if (db) {
        return db.getAll(STORE_CARDS);
    } return null;
}
const getAllFromBestStore = async () => {
    return db.getAll(STORE_BEST);
}
const getAllFromStaplesStore = async () => {
    return db.getAll(STORE_STAPLES);
}
const getAllFromSpecialtiesStore = async () => {
    return db.getAll(STORE_SPECIALTIES);
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
    addToCardStore,
    addToBestStore,
    addToStaplesStore,
    addToSpecialtiesStore,
    getFromCardStore,
    getFromBestStore,
    getFromStaplesStore,
    getFromSpecialtiesStore,
    getAllFromCardStore,
    getAllFromBestStore,
    getAllFromStaplesStore,
    getAllFromSpecialtiesStore,
    setupStore
}