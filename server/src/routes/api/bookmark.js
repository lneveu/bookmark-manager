'use strict';

const BookmarkService = require('../../services/BookmarkService');
const { apiResponseSuccess } = require('../../helpers/responses');

/**
 * Bookmark endpoints.
 * @param {import('fastify').FastifyInstance} fastify
 */
module.exports = async (fastify) => {
  fastify.get(
    '/bookmarks',
    {
      schema: {
        querystring: {
          type: 'object',
          additionalProperties: false,
          properties: { type: { type: 'string' }, limit: { type: 'integer' }, offset: { type: 'integer' } }
        }
      }
    },
    async (request) => {
      const { type, limit, offset } = request.query;
      const bookmarks = await BookmarkService.getBookmarks({ type, limit, offset });
      return apiResponseSuccess(bookmarks);
    }
  );

  fastify.post(
    '/bookmarks',
    {
      schema: {
        body: {
          type: 'object',
          additionalProperties: false,
          required: ['url'],
          properties: {
            url: { type: 'string' },
            tags: {
              type: 'array',
              items: { type: 'string' }
            }
          }
        }
      }
    },
    async (request) => {
      const { url, tags } = request.body;
      const bookmark = await BookmarkService.addBookmark(url, tags);
      return apiResponseSuccess(bookmark.toJSON());
    }
  );

  fastify.patch(
    '/bookmarks/:id/tags',
    {
      schema: {
        params: {
          properties: {
            id: { type: 'string' }
          }
        },
        body: {
          type: 'object',
          additionalProperties: false,
          required: ['tags'],
          properties: {
            tags: {
              type: 'array',
              items: { type: 'string' }
            }
          }
        }
      }
    },
    async (request) => {
      const { id } = request.params;
      const { tags } = request.body;
      const bookmark = await BookmarkService.updateTags(id, tags);
      return apiResponseSuccess(bookmark.toJSON());
    }
  );

  fastify.delete(
    '/bookmarks/:id',
    {
      schema: {
        params: {
          properties: {
            id: { type: 'string' }
          }
        }
      }
    },
    async (request) => {
      const { id } = request.params;
      await BookmarkService.deleteBookmark(id);
      return apiResponseSuccess({ id });
    }
  );
};
