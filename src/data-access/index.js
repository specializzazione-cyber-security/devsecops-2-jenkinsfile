import pg from "pg";
const { Pool } = pg;
import { database } from "../config.js";

const pool = new Pool({
  host: database.url,
  database: database.name,
  user: database.user,
  password: database.password,
  port: database.port || 5432,
});

const db = {
  query: (text, params) => pool.query(text, params),
  stop: () => {
    pool.end(() => {
      console.log(`database => stopped`);
    });
  },
};

export default db;
