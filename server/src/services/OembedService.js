'use strict';

const fetch = require('node-fetch');
const { ProviderTypess } = require('../constants');
const { NotFoundBookmarkUrlError } = require('../errors');

const Endpoints = {
  [ProviderTypess.Vimeo]: 'https://vimeo.com/api/oembed.json?url=${url}',
  [ProviderTypess.Flickr]: 'https://www.flickr.com/services/oembed/?format=json&url=${url}'
};

class OembedService {
  /**
   * Fetch oembed metadata for a given url.
   * @param {ProviderTypes} ProviderTypes
   * @param {string} url
   * @returns {object} oembed metadata
   */
  static async fetchMetadata(ProviderTypes, url) {
    let endpoint = Endpoints[ProviderTypes].replace('${url}', encodeURIComponent(url));
    const res = await fetch(endpoint);
    if (!res.ok) {
      throw new NotFoundBookmarkUrlError();
    }
    const data = await res.json();
    return data;
  }
}

module.exports = OembedService;
