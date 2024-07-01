import mongoose from "mongoose"
import db from '../config/config.js'

// database
db

// Schema
const articleSchema = new mongoose.Schema({
    author:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    desc:{
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum:  ['Technology', 'Lifestyle', 'Story', 'News','Other']
    }
})

const Articles = mongoose.model('Article', articleSchema)

export default Articles
