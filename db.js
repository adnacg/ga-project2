// const pg = require('pg');
const pg = require('pg');
const Pool = require('pg-pool')
const url = require('url');

// Initialise postgres client
const dbUrl = process.env.DATABASE_URL;

let configs;

if( process.env.DATABASE_URL ){
    const params = url.parse(dbUrl);
    const auth = params.auth.split(':');

    configs = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true
    };

    const pool2 = new Pool(config);
} else {
    config = {
      user: 'elvera',
      host: '127.0.0.1',
      database: 'jamaway',
      port: 5432,
    };

    const pool = new pg.Pool(config);
}


pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

module.exports = pool;