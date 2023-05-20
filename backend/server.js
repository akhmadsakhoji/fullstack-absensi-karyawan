const express = require("express");
const cors = require("cors");
const sequlize = require("./db.config");
const app = express();
const port = 3000;

//bikin database
const userEndpoint = require('./routes/users');
const presenceEndpoint = require('./routes/presence');

sequlize.sync().then(()=> console.log("Database Ready!"))
app.use(cors());
app.use(express.json());
app.use('/users', userEndpoint);
app.use('/presence', presenceEndpoint);

app.listen(port, ()=>{
    console.log(`running server on port ${port}`);
});
