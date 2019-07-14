/*jshint esversion: 6 */

import { allBooks, imageURL, findBookById } from './book';
import { authorsByBookId } from './author';
import { allReviews } from './review';
import { allUsers } from './user';

import gravatar from 'gravatar';

const resolvers = {
  // Resolvers for when information is in another table
  User: {
    imageURL: (user, args) => gravatar.url(user.email, { s: args.size }),
  },
  Book: {
    imageURL: (book, { size }) => imageURL(size, book.googleId),
    authors: (book, args, context) => {
      const { loaders } = context;
      const { findAuthorsByBookIdsLoader } = loaders;
      return findAuthorsByBookIdsLoader.load(book.id);
    },
    reviews: (book, args, context) => {
      const { loaders } = context;
      const { findReviewsByBookIdsLoader } = loaders;
      return findReviewsByBookIdsLoader.load(book.id);
    }
  },

  Review: {
    book: (review, args, context) => {
      const { loaders } = context;
      const { findBooksByIdsLoader } = loaders;
      return findBooksByIdsLoader.load(review.bookId);
    },

    user: (review, args, context) => {
      const { loaders } = context;
      const { findUsersByIdsLoader } = loaders;
      return findUsersByIdsLoader.load(review.userId);
      //return findUserById(review.userId);
    }
  },

  // Base Queries for getting all records
  Query: {
    book: (root, args, context) => {
      const { loaders } = context;
      const { findBooksByIdsLoader } = loaders;
      return findBooksByIdsLoader.load(args.id);
    },
    books: (root, args) => {
      return allBooks(args);
    },
    reviews: (root, args) => {
      return allReviews(args);
    },
    users: () => {
      return allUsers();
    },
  },
};

export default resolvers;
