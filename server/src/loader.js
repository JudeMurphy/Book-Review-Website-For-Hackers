/*jshint esversion: 9 */

import { findAuthorsByBookIdsLoader } from './author';
import { findUsersByIdsLoader } from './user';
import { findBooksByIdsLoader } from './book';

export default () => ({
  findAuthorsByBookIdsLoader: findAuthorsByBookIdsLoader(),
  findBooksByIdsLoader: findBooksByIdsLoader(),
  findUsersByIdsLoader: findUsersByIdsLoader()
});
