'use strict';

const ObjectId = require('mongoose').Types.ObjectId;

const { InvalidBookmarkIdError, NotFoundBookmarkError, DuplicateBookmarkError } = require('../errors');
const { ProviderTypess } = require('../constants');
const { VimeoBookmark, FlickrBookmark, Bookmark } = require('../models/Bookmark');
const OembedService = require('./OembedService');
const ProviderService = require('./ProviderService');

class BookmarkService {
  /**
   * Get a filtered and/or ordered list of bookmarks.
   * @param {object} options filter and pagination options
   * @param {string} options.type filter by BookmarkType
   * @param {number} options.limit pagination limit
   * @param {number} options.offset pagination offset
   * @returns {Bookmark[]}
   */
  static async getBookmarks({ type, limit, offset }) {
    const query = {};
    if (type) query.type = type;

    const bookmarks = await Bookmark.find(query).sort({ createdAt: -1 }).skip(offset).limit(limit);
    const total = await Bookmark.countDocuments(query);
    return { total, results: bookmarks };
  }

  /**
   * Add a bookmark.
   * @param {string} url
   * @param {string[]} tags - default: []
   * @returns {Bookmark} the created bookmark
   */
  static async addBookmark(url, tags = []) {
    const ProviderTypes = ProviderService.validateUrl(url);

    // @TODO: use a validator
    const duplicate = await Bookmark.findOne({ url });
    if (duplicate !== null) {
      throw DuplicateBookmarkError();
    }

    const oembedData = await OembedService.fetchMetadata(ProviderTypes, url);

    // remove duplicates tags
    tags = tags.filter((v, i) => tags.indexOf(v) === i);

    let bookmark;
    switch (ProviderTypes) {
      case ProviderTypess.Vimeo:
        bookmark = new VimeoBookmark({
          url,
          tags,
          title: oembedData.title,
          author: oembedData.author_name,
          width: oembedData.width,
          height: oembedData.height,
          duration: oembedData.duration
        });
        break;
      case ProviderTypess.Flickr:
        bookmark = new FlickrBookmark({
          url,
          tags,
          title: oembedData.title,
          author: oembedData.author_name,
          width: oembedData.width,
          height: oembedData.height
        });
        break;
    }

    await bookmark.save();

    return bookmark;
  }

  /**
   * Update the tags of a given bookmark.
   * @param {string} bookmarkId
   * @param {string[]} tags
   * @returns {Bookmark} the updated bookmark
   */
  static async updateTags(bookmarkId, tags) {
    if (!ObjectId.isValid(bookmarkId)) {
      throw new InvalidBookmarkIdError();
    }

    const bookmark = await Bookmark.findByIdAndUpdate(bookmarkId, { tags }, { new: true });
    if (bookmark === null) {
      throw new NotFoundBookmarkError();
    }
    return bookmark;
  }

  /**
   * Delete a bookmark.
   * @param {string} bookmarkId
   */
  static async deleteBookmark(bookmarkId) {
    if (!ObjectId.isValid(bookmarkId)) {
      throw new InvalidBookmarkIdError();
    }

    const bookmark = await Bookmark.findByIdAndDelete(bookmarkId);
    if (bookmark === null) {
      throw new NotFoundBookmarkError();
    }
  }
}

module.exports = BookmarkService;
