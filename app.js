import express from 'express'
import cardRoute from './routes/cardRoute.js'
import customerRoute from './routes/customerRoute.js'

const app = express()


// Global Middlewares
app.use(express.json())
app.use(express.urlencoded({extended : true}))


// router middleware
app.use('/api/v1', customerRoute)
app.use('/api/v1', cardRoute)



export default app