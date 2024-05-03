const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const bcrypt = require('bcrypt')

// Check login
router.get('/check-logged-in', (req, res) => {
  // Check if client has username cookie
  if (req.cookies.username) {
    const user = userController.getUserByUsername(req.cookies.username)
    if (user) {
      res.status(200).json({
        username: req.cookies.username,
        loggedIn: true
      })
    } else {
      res.status(404).json({
        username: '',
        loggedIn: false
      })
    }
  }
})

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body

  // Check if user exists on database
  const user = userController.getUserByUsername(username)

  if (user) {
    // Check if password is the same
    const isMatch = await bcrypt.compare(password, user.password)

    if (isMatch) {
      // Send user cookie as response
      res.cookie('username', username, {
        maxAge: 60000 * 10 // 10 min
      })
      res.status(200).json({
        username,
        loggedIn: true
      })
    } else {
      // Password does not match
      res.status(401).json({
        message: 'Password incorrect!'
      })
    }
  } else {
    // User does not exist
    res.status(404).json({
      message: 'User does not exist'
    })
  }
})

// Signup route
router.post('/signup', async (req, res) => {
  const { username, password } = req.body

  // Check if the user exists in database
  const user = userController.getUserByUsername(username)

  if (user) {
    // Username not available
    return res.status(409).json({
      message: 'Username is taken'
    })
  } else {
    // Hash passwrod and create new user
    const hashedPassword = await bcrypt.hash(password, 12)
    const user = userController.addUser(username, hashedPassword)

    // Send cookie in response
    res.cookie('username', user.username, {
      maxAge: 60000 * 10 // 10 min
    })
    res.json({
      username: user.username,
      loggedIn: true
    })
  }
})

// Logout route
router.get('/logout', (req, res) => {
  res.clearCookie('username') // Removes username cookie from client browser
  res.json({
    username: '',
    loggedIn: false
  })
})

module.exports = router