import { Router } from 'express'

import { getProducts } from '../controllers/products'
import { getMain } from '../controllers/index'

const router = Router()

router.get('/', getMain)
router.get('/products', getProducts)

export { router as storeRoutes }