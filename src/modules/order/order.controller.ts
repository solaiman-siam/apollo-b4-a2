import { Request, Response } from "express"
import { orderService } from "./order.service"
import { Error } from "mongoose"

const createOrder = async (req: Request, res:Response) => {
    try{
        const payload = req.body
        const result = await orderService.createOrder(payload)
        res.status(200).json({
            message: 'Order created successfully',
            status: true,
            data: result
        })
    }catch(err : unknown) {
        const error = err as Error;
        res.status(400).json({
            message: error.message,
            success: false,
            error: error,
            stack: error.stack
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
    }catch(err : unknown) {
        const error = err as Error;
        res.status(400).json({
            message: error.message,
            success: false,
            error: error,
            stack: error.stack
        })
    }
}


export const orderController = {
    createOrder,
    getRevenue
}