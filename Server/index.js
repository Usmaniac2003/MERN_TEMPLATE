const express=require('express');
const app=express();
const cors=require('cors');
//Variables
const PORT=3000;
const localhost="mongodb://127.0.0.1:27017/";
const Cloudhost="";
const DB_NAME="-";
const Local_URL=localhost+DB_NAME;
const Cloud_URL=Cloudhost+DB_NAME;


//DB connection
const {Connect_to_Mongo_DB}=require('./connect');
Connect_to_Mongo_DB(Local_URL);

//Router Connections and MiddleWares
const ExampleRouter=require('./routes/Example');
app.use(cors());
app.use(express.json());
app.use('/example',ExampleRouter);


//Listening to APP through PORT 3000.
app.listen(PORT,()=>{
console.log("Server Started at PORT: "+PORT);
});