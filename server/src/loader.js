/*jshint esversion: 9 */

import { findAuthorsByBookIdsLoader } from './author';
import { findReviewsByBookIdsLoader } from './review';
import { findUsersByIdsLoader } from './user';
import { findBooksByIdsLoader } from './book';

export default () => ({
  findAuthorsByBookIdsLoader: findAuthorsByBookIdsLoader(),
  findReviewsByBookIdsLoader: findReviewsByBookIdsLoader(),
  findBooksByIdsLoader: findBooksByIdsLoader(),
  findUsersByIdsLoader: findUsersByIdsLoader()
});
