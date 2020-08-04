import { openDB } from "idb";

import { DB_NAME } from './consts';

export const idb = {
    db1: openDB(DB_NAME, 1)
};