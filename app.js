const express = require('express')
const config = require('./public/scripts/config')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => {
    console.log('index.html')
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/about', (req, res) => {
    console.log('about.html')
    res.sendFile(__dirname + '/public/about.html')
})
app.get('/shop-sing-collar', (req, res) => {
    console.log('shopsingle.html')
    res.sendFile(__dirname + '/public/shop-sing-collar.html')
})
app.get('/contact', (req,res) => {
    console.log('contact.html')
    res.sendFile(__dirname + '/public/contact.html')
})
app.get('/shop',(req,res) => {
    console.log('shopcollar.html')
    res.sendFile(__dirname + '/public/shopcollar.html')
})

app.get('/shopanillo',(req,res) => {
    console.log('shopanillo.html')
    res.sendFile(__dirname + '/public/shopanillo.html')
})

app.get('/shoppulsera',(req,res) => {
    console.log('shoppulsera.html')
    res.sendFile(__dirname + '/public/shoppulsera.html')
})

app.post('/solicitud',(req,res) => {
    const solicitud = {
        nombre: `${req.body.name}`,
        correo: `${req.body.email}`,
        asunto: `${req.body.subject}`,
        mensaje: `${req.body.message}`
    }
    console.log('Enviado por: ' + solicitud.nombre +'\n'
        + 'Con correo: ' + solicitud.correo + '\n'
        + 'Asunto: ' + solicitud.asunto + '\n'
        + 'Mensaje: ' + solicitud.mensaje  
    )
    res.sendFile(__dirname + '/public/contact.html')
})

app.use(express.static('public'))

app.listen(config.port, () => {
    console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:3000`)
})