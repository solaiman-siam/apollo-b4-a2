
interface IProduct {
    name: string,
    price: number
    brand: string,
    type: string[],
    quantity: number,
    description: string,
    inStock: boolean,
    updatedAt: Date,
    createdAt: Date
}

export default IProduct