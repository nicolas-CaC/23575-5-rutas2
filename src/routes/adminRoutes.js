import express from 'express'


const router = express.Router()

router.get('/', (req, res) => {
    res.send('HOLA /ADMIN GET')
})

router.post('/', (req, res) => {
    res.send('HOLA /ADMIN POST')
})


export default router