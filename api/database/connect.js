const { Sequelize } = require('sequelize');

function connectdb () {
    const dbtype = process.env['DB_TYPE'];
    const dbuser = process.env['DB_USERNAME']
    const dbpass = process.env['DB_PASSWORD']
    const dblocal = process.env['DB_HOST']
    const dbport = process.env['DB_PORT']
    const dbname = process.env['DB_DB']


    return new Sequelize(`${dbtype}://${dbuser}:${dbpass}@${dblocal}:${dbport}/${dbname}`);
        //'postgres://user:pass@example.com:5432/dbname')
}
    