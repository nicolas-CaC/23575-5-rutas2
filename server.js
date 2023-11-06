import express from 'express'
import methodOverride from 'method-override'
import { middlewareError } from './src/middlewares/middlewareError404.js'
import middlewareSubdominio from './src/middlewares/middlewareSubdominio.js'

import mainRoutes from './src/routes/mainRoutes.js'
import adminRoutes from './src/routes/adminRoutes.js'
import usuariosRoutes from './src/routes/usuariosRoutes.js'
import productosRoutes from './src/routes/productosRoutes.js'

const app = express()
const PORT = 8080

app.use(methodOverride('metodo'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(middlewareSubdominio('admin', adminRoutes))

app.use('/', mainRoutes)
app.use('/usuarios', usuariosRoutes)
app.use('/productos', productosRoutes)

app.use(express.static('public'))

app.use(middlewareError)

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})