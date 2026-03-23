import express from 'express'
import path from 'node:path'

const port = 3000
const address = '::'

const app = express()

const webRoot = path.join(process.cwd(), 'www')

app.use('/', express.static(webRoot))

app.listen(port, address, error => {
  if (error) {
    console.error('prodServer.mjs: app.listen error:', error)
    process.exit(1)
  }

  console.info(`Server running on ${address}:${port}`)
})
