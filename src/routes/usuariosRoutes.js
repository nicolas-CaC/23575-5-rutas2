import express from 'express'


const router = express.Router()

router.get('/', (req, res) => {
    res.send('HOLA /USUARIOS GET')
})

router.post('/', (req, res) => {
    console.log('METODO POST', req.body, req.query.metodo)
    res.send('HOLA /USUARIOS POST')
})

router.put('/', (req, res) => {
    console.log('METODO Put', req.body, req.query.metodo)
    res.send('HOLA /USUARIOS PUT')
})


export default router