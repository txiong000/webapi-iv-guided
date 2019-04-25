require('dotenv').config();

const knex = require('knex');

const db = process.env.DB_ENV || 'production';


const config = require('../knexfile.js')[db];

module.exports = knex(config);
