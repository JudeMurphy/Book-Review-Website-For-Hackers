/*jshint esversion: 6 */

import { allBooks, imageURL } from './book';

const resolvers = {
  Book: {
    imageURL: (book, { size }) => imageURL(size, book.googleId),
  },
  Query: {
    books: () => {
      return allBooks();
    },
  },
};

export default resolvers;
