import { Request, Response } from "express";
import Product from "./product.model";
import { productService } from "./product.service";


const createProduct = async (req: Request, res:Response) => {
      try{
        const payload = req.body;
        const result =  await productService.createProduct(payload)
        res.json({
            message: 'Bicycle created successfully',
            success: true,
            data: result
        })
      }catch(err : any) {
        res.json({
          message: err.message,
          success: false,
          error: err,
          stack: err.stack
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
      }catch(err : any) {
        res.json({
          message: err.message,
          success: false,
          error: err,
          stack: err.stack
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
      }catch(err: any) {
        res.json({
          message: err.message,
          success: false,
          error: err,
          stack: err.stack
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
      }catch(err : any) {
        res.json({
          message: err.message,
          success: false,
          error: err,
          stack: err.stack
        })
      }
}
const deleteProduct = async (req: Request, res:Response) => {
      try{
        const {productId} = req.params
        const result = await productService.deleteProduct(productId)
        res.json({
            message: 'Bicycles deleted successfully',
            status: true,
            data: {}
        })

      }catch(err : any) {
        res.json({
          message: err.message,
          success: false,
          error: err,
          stack: err.stack
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