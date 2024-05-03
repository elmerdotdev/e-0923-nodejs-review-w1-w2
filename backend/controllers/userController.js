const { User, users } = require('../models/userModel')

// Get user by username
function getUserByUsername(username) {
  const foundUser = users.find(user => user.username === username)
  if (foundUser) {
    return foundUser
  } else {
    return false
  }
}

// Add user
function addUser(username, password) {
  const newUser = {
    id: users.length + 1,
    username,
    password,
  }
  users.push(newUser)
  return newUser
}

module.exports = {
  getUserByUsername,
  addUser
}