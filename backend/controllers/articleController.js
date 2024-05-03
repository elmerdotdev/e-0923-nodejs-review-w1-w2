const { Article, articles } = require('../models/articleModel')

// Get all articles
function getAllArticles() {
  return articles
}

// Get article by id
function getArticleById(articleId) {
  const foundArticle = articles.find(article => article.id === articleId)
  if (!foundArticle) {
    return false
  } else {
    return foundArticle
  }
}

// Add article
function addArticle(postName, postContent, published = true) {
  const newArticle = {
    id: articles.length + 1,
    postName,
    postContent,
    postDate: 2024,
    published
  }
  articles.push(newArticle)
  return newArticle
}

// Edit article by id
function updateArticleById(articleId, postName, postContent, published) {
  const foundArticle = articles.find(article => article.id === articleId)
  if (!foundArticle) {
    return false
  } else {
    foundArticle.postName = postName || foundArticle.postName
    foundArticle.postContent = postContent || foundArticle.postContent
    foundArticle.published = published || foundArticle.published
    return foundArticle
  }
}

// Delete article by id
function deleteArticleById(articleId) {
  const findIndex = articles.findIndex(product => product.id === articleId)
  if (findIndex !== -1) {
    articles.splice(findIndex, 1)
  } else {
    return false
  }
}

module.exports = {
  getAllArticles,
  getArticleById,
  addArticle,
  updateArticleById,
  deleteArticleById
}