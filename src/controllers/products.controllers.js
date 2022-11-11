import {pool} from '../database/db.js'

export const getProducts = async (req, res)=> {
    try{
        // throw new Error('test') prueba de error 
        const [product] = await pool.query('SELECT p.name, p.category, c.name FROM product p INNER JOIN category c ON p.category=c.id')
        // const [product] = await pool.query('SELECT * FROM category')
        res.json(product)
    }catch(errro){
        return res.status(500).json({
            message: 'error db'
        })
    }
}

export const getProductsCategory = async (req, res) =>{
    try{
        // throw new Error('test') prueba de error
        const [product] = await pool.query('SELECT * FROM product WHERE category = ?', [req.params.category] )
        if (product.length <= 0) return res.status(404).json({
            message: 'la categoria no existe'
        })
        res.json(product)
    }catch(error){
        return res.status(500).json({
            message: 'error db '
        })
    }
}

