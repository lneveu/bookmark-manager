'use strict';

const mongoose = require('mongoose');
const { ProviderTypess, BookmarkTypes } = require('../constants');

const options = { discriminatorKey: 'provider', collection: 'bookmarks', timestamps: true };
const bookmarkSchema = new mongoose.Schema(
  {
    url: {
      type: String,
      unique: true
    },
    title: String,
    author: String,
    type: {
      type: String,
      enum: Object.values(BookmarkTypes)
    },
    tags: {
      type: [String],
      default: []
    }
  },
  options
);
bookmarkSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

const Bookmark = mongoose.model('Bookmark', bookmarkSchema);

const FlickrBookmark = Bookmark.discriminator(
  ProviderTypess.Flickr,
  new mongoose.Schema(
    {
      type: {
        type: String,
        default: BookmarkTypes.Photo
      },
      width: Number,
      height: Number
    },
    options
  )
);

const VimeoBookmark = Bookmark.discriminator(
  ProviderTypess.Vimeo,
  new mongoose.Schema(
    {
      type: {
        type: String,
        default: BookmarkTypes.Video
      },
      width: Number,
      height: Number,
      duration: Number
    },
    options
  )
);

module.exports = { Bookmark, VimeoBookmark, FlickrBookmark };
