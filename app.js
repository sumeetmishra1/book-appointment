const path = require('path');
const bodyParser = require('body-parser');
const express=require('express');
const app = express();
var cors =require('cors');
const adminroutes=require('./Routes/adminroutes');
const sequelize=require('./util/database');
app.use(bodyParser.json({extended:false}));
app.use(cors());
app.use(adminroutes);
sequelize.sync().then(result=>{
    app.listen(3000)
}).catch(err=>console.log(err))
