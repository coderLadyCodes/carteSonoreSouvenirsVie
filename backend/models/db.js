import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            authSource: 'admin',
            connectTimeoutMS: 5000,
            socketTimeoutMS: 20000,
            heartbeatFrequencyMS: 10000,
            retryWrites: true,
            w: 'majority',
        })
        console.log(' Mongo DB is connected ! ')
    } catch (err) {
        console.error(' Mongo DB error connection :', err.message)
        process.exit(1)
    }
}

export default connectDB