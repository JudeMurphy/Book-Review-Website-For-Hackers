import { findBooksByIdsLoader } from './book';
import { findUsersByIdsLoader } from './user';
import { findAuthorsByBookIdsLoader } from './author';
import { findReviewsByBookIdsLoader } from './review';

export default () => ({
  findBooksByIdsLoader: findBooksByIdsLoader(),
  findUsersByIdsLoader: findUsersByIdsLoader(),
  findAuthorsByBookIdsLoader: findAuthorsByBookIdsLoader(),
  findReviewsByBookIdsLoader: findReviewsByBookIdsLoader(),
});
