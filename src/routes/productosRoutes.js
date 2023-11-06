import express from 'express'


const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.body)
    res.send('HOLA /PRODUCTOS GET')
})

router.get('/saludo', (req, res) => {
    res.send('HOLA /PRODUCTOS/SALUDO GET')
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('HOLA /PRODUCTOS POST')
})


export default router