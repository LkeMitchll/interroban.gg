/* eslint no-console: 0 */
const { request } = require('https');
const { schedule } = require('@netlify/functions');

const handler = async () => {
  await new Promise((resolve, reject) => {
    const req = request(
      `https://api.netlify.com/build_hooks/${process.env.BUILD_HOOK}`,
      { method: 'POST' },
      (res) => {
        console.info('statusCode:', res.statusCode);
        resolve();
      },
    );

    req.on('error', (e) => {
      console.error(e);
      reject();
    });
    req.end();
  });

  return {
    statusCode: 200,
  };
};

exports.handler = schedule('@daily', handler);
