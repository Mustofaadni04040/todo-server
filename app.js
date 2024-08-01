const express = require("express");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const client = require("./connection");

const port = 3000;
const app = express();

app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`Server running on port: http://localhost:${port}`)
);

client.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connnected");
  }
});

app.get("/todos", (req, res) => {
  client.query(`Select * from todos`, (err, result) => {
    if (!err) {
      res.send(result.rows);
    }
  });
});

app.post("/todos", (req, res) => {
  const { title, completed, created_at, updated_at } = req.body;
  const id = uuidv4();

  client.query(
    `Insert into todos(id, title, completed, created_at, updated_at) values('${id}', '${title}', ${completed}, '${created_at}', '${updated_at}')`,
    (err, result) => {
      if (!err) {
        res.send("Insert Success");
      } else {
        res.send(err.message);
      }
    }
  );
});

app.put("/todos/:id", (req, res) => {
  const { title, completed, created_at, updated_at } = req.body;
  client.query(
    `update todos set title = '${title}', completed = '${completed}', created_at = '${created_at}', updated_at = '${updated_at}' where id = '${req.params.id}'`,
    (err, result) => {
      if (!err) {
        res.send("Update Success");
      } else {
        res.send(err.message);
      }
    }
  );
});

app.delete("/todos/:id", (req, res) => {
  client.query(
    `delete from todo where id = ${req.params.id}`,
    (err, result) => {}
  );
});
