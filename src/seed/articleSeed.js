import db from '../config/config.js'
import Articles from '../models/articleSchema.js'


// mongo db database
db

const seedArticles = [
    {
        author: 'Vanica',
        title: 'RESTful API',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque laudantium consequatur sunt impedit, blanditiis voluptates dolores 
        quidem explicabo saepe nulla fugiat iste quibusdam aliquid! 
        Dicta fugiat amet quaerat suscipit blanditiis.`,
        category: 'Technology'
    },
    {
        author: 'Mori',
        title: 'Life at Krakatau ',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque laudantium consequatur sunt impedit, blanditiis voluptates dolores 
        quidem explicabo saepe nulla fugiat iste quibusdam aliquid! 
        Dicta fugiat amet quaerat suscipit blanditiis.`,
        category: 'Lifestyle'
    },
    {
        author: 'Vanica',
        title: 'Golang reach top 1 backend language',
        desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Eaque laudantium consequatur sunt impedit, blanditiis voluptates dolores 
        quidem explicabo saepe nulla fugiat iste quibusdam aliquid! 
        Dicta fugiat amet quaerat suscipit blanditiis.`,
        category: 'Technology'
    }
]

// migration
Articles.insertMany(seedArticles).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})

// try {
//     const result = Articles.insertMany(seedArticles)
//     console.log(result)
// } catch (err) {
//     console.log(err)
// }


