import { Request, Response } from "express"
import { orderService } from "./order.service"


const createOrder = async (req: Request, res:Response) => {
    try{
        const payload = req.body
        const result = await orderService.createOrder(payload)
        res.status(200).json({
            message: 'Order created successfully',
            status: true,
            data: result
        })

    }catch(err : any) {
        res.status(400).json({
            message: err.message,
            success: false,
            error: err,
            stack: err.stack
        })
    }
}
const getRevenue = async (req: Request, res:Response) => {
    try{
        const result = await orderService.getRevenue()
        res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: {
                totalRevenue: result
            }
        })
    }catch(err : any) {
        res.status(400).json({
            message: err.message,
            success: false,
            error: err,
            stack: err.stack
        })
    }
}


export const orderController = {
    createOrder,
    getRevenue
}