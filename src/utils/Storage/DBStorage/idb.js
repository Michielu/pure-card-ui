import { openDB } from "idb";

const DB_NAME = "db1";

export const idb = {
    db1: openDB(DB_NAME, 1)
};