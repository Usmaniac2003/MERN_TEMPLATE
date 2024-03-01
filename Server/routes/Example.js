const express=require('express');
const Example_Controller=require('../controllers/Example.js');
const router=express.Router();



//Example
router.get('/',Example_Controller);


module.exports=router;