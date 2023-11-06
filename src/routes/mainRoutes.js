import express from 'express'


const router = express.Router()

router.get('/', (req, res) => {
    res.send('HOLA RAIZ GET')
})

router.post('/', (req, res) => {
    res.send('HOLA RAIZ POST')
})


export default router