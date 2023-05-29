import app from './app.js'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const { PORT, MONGOOSE_URL } = process.env


const startServer = async()=>{
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(MONGOOSE_URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })
        console.log("Database Connected")
        app.listen(PORT, ()=>{
            console.log(`Server Started At Port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer()