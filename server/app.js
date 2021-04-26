const express = require('express');
const path = require('path');
const cors = require('cors');
const storeRoutes = require('./Routes/store');
const signupRoutes = require('./Routes/signup');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use((...args)=>{
    console.log('statics');
    return express.static('build')(...args);
});


app.use('/api/store', storeRoutes);
app.use('/api/signup', signupRoutes);

app.get('/images/:id', (req, res)=>{
    const id = req.params.id;
    console.log('images');
    res.sendFile(path.join(__dirname, 'public', 'images', id))
})

app.get('/*',(req, res)=>{
    console.log('index');
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
});


app.listen(process.env.PORT || 3001, () => console.log('server is running..'))

