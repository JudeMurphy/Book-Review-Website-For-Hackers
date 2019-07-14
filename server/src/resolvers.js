/*jshint esversion: 6 */

import { allBooks, imageURL } from './book';
import { authorsByBookId } from './author';

const resolvers = {
  Book: {
    imageURL: (book, { size }) => imageURL(size, book.googleId),
    authors: book => authorsByBookId(book.id),
  },
  Query: {
    books: () => {
      return allBooks();
    },
  },
};

export default resolvers;
