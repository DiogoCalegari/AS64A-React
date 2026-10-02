
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config({ path: '../.env' })

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ mensagem: 'Servidor funcionando!' })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})