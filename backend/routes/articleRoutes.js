const express = require('express')
const router = express.Router()
const articleController = require('../controllers/articleController')

// Get all articles
router.get('/', (req, res) => {
  const articles = articleController.getAllArticles()
  res.status(200).json(articles)
})

// Get article by id
router.get('/:id', (req, res) => {
  const { id } = req.params
  const article = articleController.getArticleById(parseInt(id))
  if (article) {
    res.status(200).json(article)
  } else {
    res.status(404).json({ message: 'Article not found' })
  }
})

// Add article
router.post('/', (req, res) => {
  const { postName, postContent, published } = req.body
  const article = articleController.addArticle(postName, postContent, published)
  res.status(201).json(article)
})

// Edit article by id
router.put('/:id', (req, res) => {
  const { id } = req.params
  const { postName, postContent, published } = req.body
  const article = articleController.updateArticleById(parseInt(id), postName, postContent, published)
  if (article) {
    res.status(200).json(article)
  } else {
    res.status(404).json({ message: 'Article not found' })
  }
})

// Delete article by id
router.delete('/:id', (req, res) => {
  const { id } = req.params
  const result = articleController.deleteArticleById(parseInt(id))
  if (result) {
    res.status(204).end()
  } else {
    res.status(404).json({ message: 'Article not found' })
  }
})

module.exports = router