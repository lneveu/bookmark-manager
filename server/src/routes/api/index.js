'use strict';

/**
 * @param {import('fastify').FastifyInstance} fastify
 */
module.exports = async (fastify) => {
  fastify.register(require('./bookmark'));
};
