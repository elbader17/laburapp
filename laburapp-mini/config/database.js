module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '92.249.45.2'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'u724643927_laburap_10000'),
        username: env('DATABASE_USERNAME', 'u724643927_laburap_10000'),
        password: env('DATABASE_PASSWORD', 'Abc123abc123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
