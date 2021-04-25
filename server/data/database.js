const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Maya:Mm316167667@cluster0.ccddl.mongodb.net/MansonsShoes?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => console.log('Connected To MondogDB')
)