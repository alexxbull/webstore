import path from 'path'
import { promises as fs } from 'fs'

const productsFile = path.join(__dirname, '..', 'data', 'products.json')

// load products file
const loadProducts = async () => {
    let products: Product[] = []

    try {
        const fileContent = await fs.readFile(productsFile, "utf8")
        products = JSON.parse(fileContent)
    }
    catch (err) {
        console.error('Error reading products.json', err);
    }

    return products
}

const defaultPhoto = '/images/products/default-product.svg'

export class Product {
    name: string
    price: number
    description: string
    photo: string

    constructor(name: string, price: number, description: string = '', photo: string = defaultPhoto) {
        this.name = name
        this.price = price
        this.description = description
        this.photo = photo === '' ? defaultPhoto : photo
    }

    // add and save product to file
    async save() {
        const products: Product[] = await loadProducts()
        products.push(this)
        const fileContent = JSON.stringify(products)

        try {
            fs.writeFile(productsFile, fileContent)
        }
        catch (err) {
            console.error('Error writing file products.json', err);
        }
    }

    // return products loaded from file
    static async fetchall() {
        return await loadProducts()
    }
}