/**
 * @type {import('next/dist/next-server/server/config-shared').NextConfig['i18n'] & import('next-i18next').UserConfig}
 */
const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'ru', 'kz'],
};

module.exports = { i18n };
