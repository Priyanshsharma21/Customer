import mongoose from 'mongoose'
import { v4 as uuidv4 } from 'uuid';

const {
    Schema,
    model
} = mongoose


const customerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
    },
    DOB: {
        type: Date,
        required: true,
    },
    emailID: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    customerID: {
        type: String,
        required: true,
        unique: true,
        default  : uuidv4,
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        default: 'ACTIVE',
    },
},{timestamps : true})



const Customer = model('Customer', customerSchema)

export default Customer