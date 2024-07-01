import mongoose from "mongoose";
import ArticlesRepo from "../repositories/articleRepository.js";
import Articles from "../models/articleSchema.js";
import ArticlesEntity from "../entity/articleEntity.js"

const ArticleController = {

    findAll: async (req, res) => {
       try {
            const articles = await ArticlesRepo.findAll({})
            res.status(200).json({
                data: articles,
                message: 'find all articles'
        })
       } catch (error) {
            res.status(500).json({
                error: 'failed find all articles'
            })
       }
    },

    findById: async (req, res) => {
        const {id} = req.params

        if (!id || !mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                error: 'invalid or missing id'
            });
        }

        try {
            const articles = await ArticlesRepo.findById(id)

            if (!articles) {
                return res.status(404).json({
                    error: 'article not found'
                });
            }

            const author = articles.author

            res.status(200).json({
                data: articles,
                author: author,
                message: 'find by id successfully'
            })
        } catch (error) {
            res.status(500).json({
                error: 'failed find id articles'
            })
        }
    },

    findByCategory: async (req, res) => {
        // take an enum values
        const categoryEnum = Articles.schema.path('category').enumValues
        const {category} = req.query
        if(!category){
            return res.status(400).json({
                error: 'please input category value'
            })
        }

        if(!categoryEnum.includes(category)){
            return res.status(400).json({
                error: 'invalid category'
            })
        }

        try {

            const result = await ArticlesRepo.findByCategory(category)
            
            res.status(200).json({
                data: result,
                message: `${category} category article found`
            })
        } catch (error) {
            res.status(500).json({
                error: 'failed find category'
            })
        }
    },
    insertArticle: async (req, res) => {
        const {body} = req;
        
        // joi validate
        const {error} = ArticlesEntity.validate(body)
        if(error){
            return res.status(400).json({
                error: error.details[0].message
            });
        }

        try {
            const article =  ArticlesRepo.insertArticle(body)

            await article.save()

            res.status(201).json({
                data: article,
                message: 'insert article successfully'
            })
            
        } catch (error) {
            res.status(500).json({
                error: 'internal server error insert'
            })
        }
    },

    updateArticle: async (req, res) => {
        const {id} = req.params
        const {body} = req

        // joi validate
        const {error} = ArticlesEntity.validate(body)

        if(error){
            return res.status(400).json({
                error: error.details[0].message
            });
        }

        try {
            const articleUpdate = await ArticlesRepo.updateArticle(id, body)
            res.status(200).json({
                data: articleUpdate,
                message: `update id:${id} successfully`
            })
            
        } catch (error) {
            res.status(500).json({
                error: 'interal server error '
            })
        }
    },

    deleteArticle: async (req, res) => {
        const {id} = req.params
        try {
            if (!mongoose.Types.ObjectId.isValid(id)) {
                return res.status(404).json({
                    error: 'invalid id format or id not found'
                })
            }

            await ArticlesRepo.deleteArticle(id)
            res.status(200).json({
                message: `article ${id} has been deleted successfully`
            })
        } catch (error) {
            res.status(500).json({
                error: 'internal server error'
            })
        }
    }
}

export default ArticleController