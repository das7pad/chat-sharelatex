module.exports = {
  sentry: {
    dsn: process.env['SENTRY_DSN']
  },

  internal: {
    chat: {
      host: process.env['LISTEN_ADDRESS'] || 'localhost',
      port: 3010
    }
  },

  mongo: {
    url:
      process.env['MONGO_CONNECTION_STRING'] ||
      `mongodb://${process.env['MONGO_HOST'] || 'localhost'}/sharelatex`
  },

  redis: {}
}
