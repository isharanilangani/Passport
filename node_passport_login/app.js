const express = require('express');
const expressLayouts=require('express-ejs-layouts')
const mongoose = require('mongoose');

const app = express();

//DB config
const db = require('./config/keys').MogoURI;

//connect to Mongo
mongoose.connect(db,{useNewUrlParser: true})
.then(() => console.log('MongoDB connected...'))
.catch(err=> console.log(err));

//EJS
app.use(expressLayouts);
app.set('view engine','ejs');

//bodyparser
app.use(express.urlencoded({extended:false}));

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));
