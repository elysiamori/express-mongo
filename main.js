// Chapter 4 Project Express JS & MongoDB

import express from 'express'
import ArticlesRoutes from './src/routers/articleRoute.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/', ArticlesRoutes)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('*', (req, res) => {
    res.status(404).json({
        error: 'method or path not available'
    })
})

// listen and serve
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}) 