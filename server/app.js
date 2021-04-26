const express = require('express');
const path = require('path');
const cors = require('cors');
const storeRoutes = require('./Routes/store');
const signupRoutes = require('./Routes/signup');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));


app.use('/store', storeRoutes);
app.use('/signup', signupRoutes);




app.listen(3001, () => console.log('server is running..'))