// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require('mongoose');

//IMPORTS FROM OYHER FILES
const authRouter = require('./routes/auth');
//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://daulkarshubham:Prathamesh2002@cluster0.xxmzznw.mongodb.net/?retryWrites=true&w=majority";

app.use(authRouter);


//COnnections

mongoose.connect(DB).then(()=>{
    console.log("Connection successful");
})
.catch((e)=>{
    console.log(e);
});
// creating an api
app.listen(PORT,() => {
    console.log(`Connectaed at port ${PORT} hello`);
});

