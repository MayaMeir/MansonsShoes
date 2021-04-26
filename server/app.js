const express = require('express');
const path = require('path');
const cors = require('cors');
const storeRoutes = require('./Routes/store');
const signupRoutes = require('./Routes/signup');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static('build'));

app.use('/images', express.static(path.join(__dirname, 'public', 'images')));

app.use('/api/store', storeRoutes);
app.use('/api/signup', signupRoutes);

app.get('/*',(req, res)=>{
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
});


app.listen(process.env.PORT || 3001, () => console.log('server is running..'))

