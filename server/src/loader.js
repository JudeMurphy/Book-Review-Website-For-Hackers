/*jshint esversion: 9 */

import { findAuthorsByBookIdsLoader } from './author';

export default () => ({
  findAuthorsByBookIdsLoader: findAuthorsByBookIdsLoader(),
});
