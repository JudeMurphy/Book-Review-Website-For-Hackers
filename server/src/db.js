/*jshint esversion: 9 */

import { Pool } from 'pg';

// Used To Convert From Snake To Camelcase
import humps from 'humps';

const pool = new Pool({
  host: 'localhost',
  database: 'hackerbook',
});

async function query(sql, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(sql, params);
    const rows = humps.camelizeKeys(result.rows);
    return { ...result, rows };
  } catch (err) {
    console.log(err);
  } finally {
    client.release();
  }
}

export default query;