const express=require("express");
const{handleGenerateNewShortURL}=reqire("../controllers/url");
const router=express.Router();
router.post("/",handleGenerateNewShortURL);
module.exports=router;

