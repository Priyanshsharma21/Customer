import express from 'express'
import { getCustomer,createPost,deletePost } from '../controllers/custometController.js'

const router = express.Router()


router.get('/customer', getCustomer)
router.post('/customer', createPost)
router.delete('/customer/:id', deletePost)



export default router
