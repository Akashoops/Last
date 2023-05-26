const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Akash999:Akash999@cluster0.hd1jutc.mongodb.net/')
.then(() => {console.log('Connected')})
.catch(err => {console.log(err)});