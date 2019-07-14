/*jshint esversion: 6 */

import { allBooks, imageURL, findBookById } from './book';
import { authorsByBookId } from './author';
import { allReviews } from './review';
import { allUsers, findUserById } from './user';

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
    },
    user: (review) => {
      return findUserById(review.userId);
    }
    /*user: (review, args, context) => {
      const { loaders } = context;
      const { findBooksByIdsLoader } = loaders;
      return findUsersByIdsLoader.load(review.name);
    },*/
  },

  // Base Queries for getting all records
  Query: {
    books: () => {
      return allBooks();
    },
    reviews: () => {
      return allReviews();
    },
    users: () => {
      return allUsers();
    },
  },
};

export default resolvers;
