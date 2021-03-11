import { apiBaseUrl } from './config';

export class ApiError extends Error {
  constructor(code, message, error) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.error = error;
  }
}

export async function jsonFetch(endpoint, options = {}, params = null) {
  if (options.body && typeof options.body === 'object') {
    options.body = JSON.stringify(options.body);
  }

  options = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    ...options
  };

  if (params && typeof params === 'object') {
    params =
      '?' +
      Object.keys(params)
        .filter((k) => params[k] !== undefined)
        .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
        .join('&');
  } else {
    params = '';
  }

  try {
    const response = await fetch(`${apiBaseUrl}${endpoint}${params}`, options);
    const payload = await response.json();

    if (response.ok) {
      return payload.data;
    }

    throw new ApiError(payload.code, payload.message, payload.error);
  } catch (err) {
    let error = err;

    // handle network or JSON parsing errors
    if (!(error instanceof ApiError)) {
      error = new ApiError('REQUEST_ERROR', 'request error', error);
    }

    console.error(error);
    throw error;
  }
}
