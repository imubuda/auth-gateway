// parser.js
const { parse } = require('url');
const { IncomingMessage } = require('http');

module.exports = {
  parseRequest(req) {
    const parsedUrl = parse(req.url, true);
    const query = parsedUrl.query;

    let method;
    if (req.method === 'POST' && req.headers['content-length'] !== '0') {
      const body = [];
      req.on('data', (chunk) => body.push(chunk));
      req.on('end', () => {
        const buffer = Buffer.concat(body).toString();
        // handle POST request body
        method = 'POST';
        query = JSON.parse(buffer);
      });
    } else {
      method = req.method;
    }

    return {
      method,
      url: parsedUrl.href,
      query,
      headers: req.headers,
      body: method === 'POST' && req.headers['content-length'] !== '0',
    };
  },
};