const express = require('express')
const app = express();
const path = require('path');
const port = 3030

app.listen(port, () => console.log('Servidor abierto en el puerto ' + port))

app.use(express.static('public'))

app.get('/', (rep, res) => {res.sendFile(path.join(__dirname, 'views' , 'index.html'))})
app.get('/index.html', (rep, res) => {res.sendFile(path.join(__dirname, 'views' , 'index.html'))})
app.get('/productDetail.html', (rep, res) => {res.sendFile(path.join(__dirname, 'views' , 'productDetail.html'))})
app.get('/productCart.html', (rep, res) => {res.sendFile(path.join(__dirname, 'views' , 'productCart.html'))})
app.get('/register.html', (rep, res) => {res.sendFile(path.join(__dirname, 'views' , 'register.html'))})
app.get('/login.html', (rep, res) => {res.sendFile(path.join(__dirname, 'views' , 'login.html'))})