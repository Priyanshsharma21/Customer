import express from 'express'
import { createCard,getAllCards } from '../controllers/cardController.js'

const router = express.Router()


router.get('/cards', getAllCards)
router.post('/card', createCard)


export default router