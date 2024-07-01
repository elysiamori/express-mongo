import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config()

const db = mongoose.connect(
    process.env.DATABASE_URL
)

db.then(() => {
    console.log('Connected to the database successfully')
}).catch((error) => {
    console.error('Error connecting to the database:', error)
    process.exit(1)
})

export default db.finally