const express = require('express');
const path = require('path');
const cors = require('cors');
const storeRoutes = require('./Routes/store');
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/store', storeRoutes);



app.listen(3001, () => console.log('server is runing..'))