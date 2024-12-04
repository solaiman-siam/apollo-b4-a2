import Product from "../product/product.model";
import { IOrder } from "./order.interface";
import Order from "./order.model"



const createOrder = async (payload: IOrder) => {

    const id = payload.product
    const quantity = payload.quantity

    const product = await Product.findById(id)
    if(!product) {
        throw new Error('product is not found')
        // return {}
    }
    if (quantity > product.quantity) {
        product.inStock = false;
        await product.save();

        // Then throw an error
        throw new Error('insufficient stock ');
    }
    product.quantity -= quantity
    await product.save()

    const result = await Order.create(payload)
    return result
}


const getRevenue = async () => {
    const totalRevenue = await Product.aggregate([
      {
        $project: {
            revenue: {$multiply: ["$price", "$quantity"] }
        },
        
      },
      {
        $group: {
            _id: null,
            totalRevenue : {$sum : "$revenue"}
        }
      }
      
    ])
    return totalRevenue[0]?.totalRevenue || 0;
}


export const orderService = {
    createOrder,
    getRevenue
}