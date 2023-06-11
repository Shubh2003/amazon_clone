console.log("Hello World");

const express = require("express");

const PORT = 3000;

const app = express();

// creating an api
app.listen(PORT,"0.0.0.0",() => {
    console.log(`Connectaed at port ${PORT} hello`);
});

