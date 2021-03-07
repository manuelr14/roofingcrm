// impirting npm packges

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('tiny'));

app.get('/api',(req,res) => {
    const data = {
            username: 'manuelr14',
            age: 32
    };
    res.json(data);
});
app.get('/api/name',(req,res) => {
    const data = {
            username: 'mpeterson',
            age: 40
    };
    res.json(data);
});

app.listen(PORT, console.log(`Serverser is starting at ${PORT}`));