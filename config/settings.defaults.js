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

  apis: {
    web: {
      url: `http://${process.env['WEB_HOST'] || 'localhost'}:${process.env[
        'WEB_PORT'
      ] || 3000}`,
      user: 'sharelatex',
      pass: 'password'
    }
  },

  mongo: {
    url:
      process.env['MONGO_CONNECTION_STRING'] ||
      `mongodb://${process.env['MONGO_HOST'] || 'localhost'}/sharelatex`
  },

  redis: {
    web: {
      host: (
        process.env['WEB_REDIS_HOST'] ||
        process.env['REDIS_HOST'] ||
        'localhost'
      ),
      port: (
        process.env['WEB_REDIS_PORT'] ||
        process.env['REDIS_PORT'] ||
        '6379'
      ),
      password: (
        process.env['WEB_REDIS_PASSWORD'] ||
        process.env['REDIS_PASSWORD'] ||
        ''
      ),
    }
  }
}
