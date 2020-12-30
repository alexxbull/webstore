import { Request, Response } from 'express'

import { Product } from '../models/product'

export const getProducts = async (req: Request, res: Response) => {
    const products = await Product.fetchall()

    res.render('store/products.ejs', {
        pageTitle: 'Products',
        products: products
    })
}

export const getAddProduct = (req: Request, res: Response) => {
    res.render('admin/add-product.ejs', {
        pageTitle: 'Add Product'
    })
}

export const postAddProduct = (req: Request, res: Response) => {
    const productName = req.body.pname
    const productPrice = Number(req.body.price)
    const productPhoto = req.body.photo || ''
    const productDescription = req.body.description || ''

    const product: Product = new Product(productName, productPrice, productDescription, productPhoto)
    product.save()

    res.redirect('/products')
}