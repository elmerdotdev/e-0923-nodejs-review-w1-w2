// Import the packages
const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')
const cookieParser = require('cookie-parser')

// Set up middlewares
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  optionsSuccessStatus: 200
})) // for CORS policy to allow only frontend to connect to backend
app.use(express.json()) // allow json requests/responses
app.use(express.urlencoded({ extended: true })) // for parsing form submissions
app.use(cookieParser(process.env.COOKIE_SECRET_KEY)) // protecting our cookies

// Routes
const userRoutes = require('./routes/userRoutes')
const articleRoutes = require('./routes/articleRoutes')

app.use('/users', userRoutes)
app.use('/articles', articleRoutes)

app.get('/', (req, res) => {
  res.status(200).send('Server is up!')
})

// Start server
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Server is running on port ${process.env.BACKEND_PORT}...`)
})