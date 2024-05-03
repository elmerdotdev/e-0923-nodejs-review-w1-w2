class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

// In-memory database
const users = [
  {
    id: 1,
    username: 'admin',
    password: '$2a$12$LatYqnWb7kBuxUJhXlIFsOaRCNFrt9appopGfptWd7XNQHWw6ScUW' // admin.12345
  }
]

module.exports = {
  User,
  users
}