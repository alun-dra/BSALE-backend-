import {Router} from 'express'
import {getCategory} from '../controllers/category.controllers.js'

const router = Router()

router.get('/categorias', getCategory)

export default router