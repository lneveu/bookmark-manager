'use strict';
const createError = require('fastify-error');

const InvalidBookmarkUrlError = createError('INVALID_BOOKMARK_URL', 'invalid url', 400);

const UnsupportedBookmarkUrlError = createError(
  'UNSUPPORTED_BOOKMARK_URL',
  'unsupported url (use a Vimeo or Flickr url)',
  400
);

const InvalidBookmarkIdError = createError('INVALID_BOOKMARK_ID', 'invalid bookmark id', 400);

const DuplicateBookmarkError = createError('DUPLICATE_BOOKMARK', 'duplicate bookmark url', 400);

const NotFoundBookmarkUrlError = createError('NOT_FOUND_BOOKMARK_URL', 'url not found', 404);

const NotFoundBookmarkError = createError('NOT_FOUND_BOOKMARK', 'bookmark not found', 404);

module.exports = {
  InvalidBookmarkUrlError,
  UnsupportedBookmarkUrlError,
  InvalidBookmarkIdError,
  DuplicateBookmarkError,
  NotFoundBookmarkUrlError,
  NotFoundBookmarkError
};
