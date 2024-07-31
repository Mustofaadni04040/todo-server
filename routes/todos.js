import express from "express"
import {v4 as uuidv4} from "uuid"
import bodyParser from "body-parser"

const router = express.Router()

const todos = [
    {
        id: "1",
        title: "Main Game",
        completed: false,
        created_at: "2024-07-31T12:34:56Z",
        updated_at: "2024-07-31T12:34:56Z"
      },
      {
        id: "2",
        title: "Beli Makanan",
        completed: true,
        created_at: "2024-07-30T09:00:00Z",
        updated_at: "2024-07-30T09:00:00Z"
      }
]

var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get("/", (req, res) => {
    res.send(todos)
})

router.post("/", jsonParser, (req, res) => {
  const todo = req.body

  console.log(req.body);

  todos.push({...todo, id: uuidv4()})

  res.send(`${todo.title} sudah ditambahkan ke database`)
})

export default router