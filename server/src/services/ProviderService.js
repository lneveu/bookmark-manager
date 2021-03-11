'use strict';

const { ProviderTypess } = require('../constants');
const { InvalidBookmarkUrlError, UnsupportedBookmarkUrlError } = require('../errors');

const VimeoHostnameRegexp = /^vimeo\.com$/;
const FlickrHostnameRegexp = /^(.+\.)?flickr\.com$/;

class ProviderService {
  /**
   * Check if the hostname of the url is supported.
   * @param {string} url
   * @returns {ProviderTypes} provider type
   */
  static validateUrl(url) {
    let urlObj;
    try {
      urlObj = new URL(url);
    } catch (error) {
      throw new InvalidBookmarkUrlError();
    }

    if (VimeoHostnameRegexp.test(urlObj.hostname)) {
      return ProviderTypess.Vimeo;
    }

    if (FlickrHostnameRegexp.test(urlObj.hostname)) {
      return ProviderTypess.Flickr;
    }

    throw new UnsupportedBookmarkUrlError();
  }
}

module.exports = ProviderService;
