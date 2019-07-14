/*jshint esversion: 9 */

import { map, groupBy } from 'rambda';
import DataLoader from 'dataloader';
import query from './db';

async function findBooksByIds(ids) {
  const sql = `
  select *
  from hb.book
  where hb.book.id = ANY($1);
  `;
  const params = [ids];
  try {
    const result = await query(sql, params);
    const rowsById = groupBy((book) => book.id, result.rows);
    return map(id => {
      const book = rowsById[id] ? rowsById[id][0] : null;
      return book;
    } , ids);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export function findBooksByIdsLoader() {
  return new DataLoader(findBooksByIds);
}

const ORDER_BY = {
  ID_DESC: 'id desc',
  RATING_DESC: 'rating desc',
};

export async function allBooks(args) {
  const orderBy = ORDER_BY[args.orderBy];
  const sql = `
  select *
  from hb.book
  order by ${orderBy};
  `;
  try {
    const result = await query(sql);
    return result.rows;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export function imageURL(size, id) {
  const zoom = size === 'SMALL' ? 1 : 0;
  return `//books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=${zoom}&source=gbs_api`;
}

// NO LONGER NEEDED
// export async function findBookById(args) {
//   const bookId = args.id;
//   const sql = `
//   select *
//   from hb.book
//   where hb.book.id = ${bookId};
//   `;
//   try {
//     const result = await query(sql);
//     return result.rows[0];
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// }
