/*jshint esversion: 9 */

// Used To Convert From Snake To Camelcase
import humps from 'humps';

import { Pool } from 'pg';
const pool = new Pool({
  host: 'localhost',
  database: 'hackerbook',
});

// Need To Log Query For Debugging
function logQuery (sql, params) {
  console.log('\nBEGIN -----');
  console.log('SQL:', sql);
  console.log('PARAMS', JSON.stringify(params));
  console.log('END -----');
}

async function query(sql, params) {
  const client = await pool.connect();
  logQuery(sql, params);
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
