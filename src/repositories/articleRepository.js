import Articles from "../models/articleSchema.js"

const articlesRepository = {

    findAll: () => {
        const mongo = Articles.find({})

        return mongo
    },

    findById: (id) => {
        const mongo = Articles.findById({_id: id})

        return mongo
    },

    findByCategory: (category) => {
        const mongo = Articles.find({category})

        return mongo
    },

    insertArticle: (body) => {
        const mongo = new Articles(body)

        return mongo
    },

    updateArticle: (id, body) => {
        const mongo = Articles.findByIdAndUpdate({_id: id}, body, {new: true, userFindAndModify: true})

        return mongo
    },

    deleteArticle: (id) => {
        const mongo = Articles.findByIdAndDelete({_id: id})

        return mongo
    }
}

export default articlesRepository