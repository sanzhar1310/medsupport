const { i18n } = require('./next-i18next.config');

/**
 * @type {import('next/dist/next-server/server/config-shared').NextConfig}
 */
const config = {
  future: {
    webpack5: true,
  },
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dadetanjx/image/upload/v1618557276',
  },
  i18n,
};

module.exports = config;
