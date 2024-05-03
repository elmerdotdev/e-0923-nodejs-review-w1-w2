class Article {
  constructor(id, postName, postContent, postDate, published) {
    this.id = id;
    this.postName = postName;
    this.postContent = postContent;
    this.postDate = postDate;
    this.published = published;
  }
}

// In-memory database
const articles = [
  {
    id: 1,
    postName: 'Jack and Jill',
    postContent: 'Went up the hill',
    postDate: 2024,
    published: false
  }
]

module.exports = {
  Article,
  articles
}