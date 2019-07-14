/*jshint esversion: 6 */

import { allBooks, imageURL, findBookById } from './book';
import { authorsByBookId } from './author';
import { allReviews } from './review';

const resolvers = {
  Book: {
    imageURL: (book, { size }) => imageURL(size, book.googleId),
    authors: (book, args, context) => {
      const { loaders } = context;
      const { findAuthorsByBookIdsLoader } = loaders;
      return findAuthorsByBookIdsLoader.load(book.id);
    },
  },

  Review: {
    book: (review, args, context) => {
      const { loaders } = context;
      const { findBooksByIdsLoader } = loaders;
      return findBooksByIdsLoader.load(review.bookId);
    }
  },

  Query: {
    books: () => {
      return allBooks();
    },
    reviews: () => {
      return allReviews();
    }
  },
};

export default resolvers;
