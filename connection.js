const { Client } = require("pg");

const client = new Client({
  host: "192.168.1.12",
  port: 5432,
  user: "postgres",
  password: "postgres",
  database: "todo",
});

module.exports = client;
