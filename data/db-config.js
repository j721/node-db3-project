const knex = require("knex");

const config = require("../knexfile.js");


//switched to development

module.exports = knex(config.development);