import express from 'express'
import path from 'path'
import cors from 'cors'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
})

app.get('/data', (req, res) => {
    const users = {usuarios: ["usuario1", "usuario2", "usuario3"]}
    res.json(users)
})

app.listen(5000, () => {console.log(`Server on port 5000`)})