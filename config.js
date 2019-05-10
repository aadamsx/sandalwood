module.exports = {
  ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  URL: process.env.BASE_URL || 'http://localhost:3000',
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://demo:passw0rd@ds157653.mlab.com:57653/fp-demo',
  SECRET: process.env.SECRET || 'secret'
}