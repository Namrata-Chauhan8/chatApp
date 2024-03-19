const express=require('express');
const bodyParser=require('body-parser');
const route= require("./routes/Route");
const app = express();
const dotenv =require('dotenv') ;
dotenv.config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require("./database/Db");
const port=8000;

require("./model/User");

app.use('/',route);


app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})