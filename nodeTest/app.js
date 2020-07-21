const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send('hello')
})
app.listen('3001', (err) => {
    console.log('启动成功')
})