import express from 'express'
import articles from '../api/articlesApi.js'

const router = express.Router()

router.use('/articles', articles)

export default router