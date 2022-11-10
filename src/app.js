import express from 'express'
import productsEverybodyGet from './routes/products.routes.js'
import categoryEverybobyGet from './routes/category.routes.js'

const app = express()

//rutas
app.use('/api', productsEverybodyGet)
app.use('/api', categoryEverybobyGet)
app.get('/prueba', (req, res)=>res.send('el servidor resive la ruta inicial bien...:D'))

//middleware
app.use((req, res, next)=>{
    res.status(404).json({
        message: 'ruta no encontrado'
    })
})

export default app