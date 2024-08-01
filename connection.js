const { Client } = require("pg");

const client = new Client({
  host: process.env.HOST_POSTGRES,
  port: 5432,
  user: process.env.USERNAME_POSTGRES,
  password: process.env.PASSWORD_POSTGRES,
  database: "todo",
});

module.exports = client;
