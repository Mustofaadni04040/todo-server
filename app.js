import express from 'express'
const app = express()
const port = 3000
import todoRoutes from './routes/todos.js'

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => console.log(`Server running on port: http://localhost:${port}`));