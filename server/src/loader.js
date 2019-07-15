import { findBooksByIdsLoader } from './book';
import { findUsersByIdsLoader } from './user';
import { findAuthorsByBookIdsLoader } from './author';
import { findReviewsByBookIdsLoader } from './review';

export default () => ({
  findAuthorsByBookIdsLoader: findAuthorsByBookIdsLoader(),
  findBooksByIdsLoader: findBooksByIdsLoader(),
  findUsersByIdsLoader: findUsersByIdsLoader(),
  findReviewsByBookIdsLoader: findReviewsByBookIdsLoader(),
});
