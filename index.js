const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('ffffffffffffffff'))

app.get('/path1', function (req, res){
    res.send('get path1');
})

app.get('/path2', function (req, res){
    res.send('get path2 : ', Date());
})

app.put('/path3', function (req, res){
    res.send('put path3');
})

app.listen(port, () => console.log('Example app listening at http://localhost:%{port}'))
