import {Router} from 'express'
import {getProducts, getProductsCategory} from '../controllers/products.controllers.js'

const router = Router()

router.get('/productos', getProducts)
router.get('/productos/:category', getProductsCategory)


export default router