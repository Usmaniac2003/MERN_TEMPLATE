const mongoose=require('mongoose');

//Schema for Short URL 
const ExampleSchema=new mongoose.Schema(
{
    name:String,
}
,{timestamps:true});


//Model of Short URL
const EXAMPLE=new mongoose.model('example',ExampleSchema);

module.exports=EXAMPLE;