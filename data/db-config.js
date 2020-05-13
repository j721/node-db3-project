const knex = require("knex");

const config = require("../knexfile.js");


//switch as either development/production
module.exports = knex(config.development);