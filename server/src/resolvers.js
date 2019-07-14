/*jshint esversion: 6 */

import { allBooks, imageURL } from './book';
import { authorsByBookId } from './author';

const resolvers = {
  Book: {
    imageURL: (book, { size }) => imageURL(size, book.googleId),
    authors: (book, args, context) => {
      const { loaders } = context;
      const { findAuthorsByBookIdsLoader } = loaders;
      return findAuthorsByBookIdsLoader.load(book.id);
    },
  },
  Query: {
    books: () => {
      return allBooks();
    },
  },
};

export default resolvers;
