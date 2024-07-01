import Joi from 'joi'

const articleRequest = Joi.object({
    author: Joi.string().required(),
    title: Joi.string().required(),
    desc: Joi.string().required(),
    category: Joi.string().required()
})

export default articleRequest