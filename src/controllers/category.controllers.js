import {pool} from '../database/db.js'

export const getCategory = async (req, res)=> {
    const [category] = await pool.query('SELECT * FROM category')
    res.json(category)
}