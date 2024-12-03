import express, { Request, Response } from 'express'
import productRouter from './modules/product/product.router'
import orderRouter from './modules/order/order.router'



const app = express()

// middleware
app.use(express.json())



app.use('/api', productRouter)
app.use('/api', orderRouter)

app.get('/', (req:Request , res:Response) => {
  res.send("server is live ⚡")
})

export default app