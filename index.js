const express = require('express')
const port = 3500
const app = express()
app.use(express.static('static'))


app.get("/", (req, res)=>{
    res.sendFile('./static/index.html', {
        root: __dirname
    })
})

app.get('/contacto' , (req, res)=>{
    res.sendFile('./static/contact.html', {
        root: __dirname
    })
})

app.get('/portafolio' , (req, res)=>{
    res.sendFile('./static/portfolio.html', {
        root: __dirname
    })
})

app.get('/servicio' , (req, res)=>{
    res.sendFile('./static/services.html', {
        root: __dirname
    })
})

app.listen(port)
console.log(`Servidor corriendo: ${port} http://localhost:${port}`)