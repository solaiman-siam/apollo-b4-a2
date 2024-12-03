import { Aggregate } from "mongoose"
import IProduct from "./product.interface"
import Product from "./product.model"


const createProduct = async (payload: IProduct ) => {
    const result = await Product.create(payload)
    return result
}
const getAllProduct = async ( searchTerm : string | string[] | undefined) => {

    const query = searchTerm
        ? {
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } },
                { brand: { $regex: searchTerm, $options: 'i' } },
                { type: { $regex: searchTerm, $options: 'i' } },
            ],
        }
        : {}; // Empty query to fetch all documents
    
        const result = await Product.find(query)

        return result
    
}
const getSingleProduct = async (productId: string) => {
    const result = await Product.findById(productId)
    return result
}
const updateProduct = async (productId: string, payload: IProduct ) => {
    const result = await Product.findByIdAndUpdate(productId, payload, {new: true})
    return result
}
const deleteProduct = async (productId: string) => {
    const result = await Product.findByIdAndDelete(productId)
    return result
}
 
export const productService = {
    createProduct,
    getAllProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}