import { Request, Response } from "express";
import { productService } from "./product.service";
import { Error } from "mongoose";


const createProduct = async (req: Request, res:Response) => {
      try{
        const payload = req.body;
        const result =  await productService.createProduct(payload)
        res.json({
            message: 'Bicycle created successfully',
            success: true,
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
const getAllProduct = async (req: Request, res:Response) => {
      try{
        const {searchTerm} = req.query
        const result = await productService.getAllProduct(searchTerm as string)
        res.json({
            message: 'Bicycles retrieved successfully',
            status: true,
            data: result
        })
      }catch(err : unknown) {
        const error = err as Error;
        res.status(400).json({
          message: error.message,
          success: false,
          error: err,
          stack: error.stack
        })
      }
}
const getSingleProduct = async (req: Request, res:Response) => {
      try{
        const {productId} = req.params
        const result = await productService.getSingleProduct(productId)
        res.json({
            message: 'Bicycles retrieved successfully',
            status: true,
            data: result
        })
      }catch(err: unknown) {
        const error = err as Error;
        res.status(400).json({
          message: error.message,
          success: false,
          error: error,
          stack: error.stack
        })
      }
}
const updateProduct = async (req: Request, res:Response) => {
      try{
        const {productId} = req.params
        const payload = req.body
        const result = await productService.updateProduct(productId, payload)
        res.json({
            message: 'Bicycles updated successfully',
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
const deleteProduct = async (req: Request, res:Response) => {
      try{
        const {productId} = req.params
        await productService.deleteProduct(productId)
        res.json({
            message: 'Bicycles deleted successfully',
            status: true,
            data: {}
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

export const productController = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}