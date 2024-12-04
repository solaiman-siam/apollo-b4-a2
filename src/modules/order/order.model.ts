import { model, Schema } from "mongoose";



const orderSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    totalPrice : {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    }
    
})


const Order = model("Order", orderSchema)

export default Order