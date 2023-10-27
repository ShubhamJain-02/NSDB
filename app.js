const express = require('express');
const userRoutes = require('./routes/userRoutes');
const CartRouter = require('./routes/CartRoutes');
const connection = require('./db/connection');

const app = express();
connection()

app.use('/api',userRoutes);
app.use('/api',CartRouter);


app.listen(1234,(error)=>{
    if(error){
        console.log("error occur",error);
    }
    else{
        console.log("Server started");
    }
})