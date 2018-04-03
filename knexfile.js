// Define DB connections for different environments
module.exports = {
development: {
 client: 'pg',
 connection: 'postgres://localhost/record-dev'
},
test: {
  client: 'pg',
  connection: 'postgres://localhost/record-test'
},
production: {
 client: 'pg',
 connection: process.env.DATABASE_URL
}
}
