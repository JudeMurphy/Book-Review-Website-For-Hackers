/*jshint esversion: 9 */

import { map, groupBy } from 'ramda';
import DataLoader from 'dataloader';
import query from './db';

// Find a User By Specific Name
export async function findUserById(id) {
  const sql = `
  select *
  from hb.user
  where hb.user.id = $1;
  `;
  const params = [id];
  try {
    const result = await query(sql, params);
    return result.rows[0];
  } catch (err) {
    console.log(err);
    throw err;
  }
}

// General Catch All Function For All Users
export async function allUsers() {
  const sql = `
  select *
  from hb.user
  `;

  try {
    const result = await query(sql);
    return result.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
