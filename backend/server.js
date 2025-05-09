import express from 'express'
import dotenv from 'dotenv'
import connectDB from './models/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use('/', userRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`server running on port: ${PORT}`))