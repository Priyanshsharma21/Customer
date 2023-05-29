import Card from "../models/cardModel.js"

export const getAllCards = async(req,res)=>{
    try {
        const cards = await Card.find()

        res.status(200).json({success: true, cards : cards})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, error : error})
    }
}



export const createCard = async(req,res)=>{
    try {
        const card = await Card.create(req.body)
        const populateCard = await card.populate('customerID')


        res.status(201).json({success: true, card : populateCard})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, error : error})
    }
}