/**
 * HTTP API success response.
 * @param {*} data
 * @param {number} statusCode - default: 200
 * @returns {object}
 */
const apiResponseSuccess = (data, statusCode = 200) => ({
  statusCode,
  data
});

/**
 * HTTP API error response.
 * @param {*} error
 * @param {number} statusCode - default: 500
 * @returns {object}
 */
const apiResponseError = (error, statusCode = 500) => ({
  statusCode,
  error: error.name || 'Api Internal Error',
  message: error.message || error,
  ...(error.code !== undefined && { code: error.code })
});

module.exports = { apiResponseError, apiResponseSuccess };
