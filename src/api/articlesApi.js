import express from 'express'
import ArticleController from '../controllers/articleControllers.js'

const router = express.Router()

router
    .get('/', ArticleController.findAll)
    .post('/', ArticleController.insertArticle)
    .get('/category', ArticleController.findByCategory)
    .get('/:id', ArticleController.findById)
    .put('/:id', ArticleController.updateArticle)
    .delete('/:id', ArticleController.deleteArticle)
    
export default router