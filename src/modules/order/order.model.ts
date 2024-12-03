import { model, Schema } from "mongoose";



const orderSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    product: {
        type: String,
    },
    quantity: {
        type: Number
    },
    totalPrice : {
        type: Number
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