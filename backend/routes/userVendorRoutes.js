const express = require("express");
const router = express.Router();
const db = require("../config/db");


router.get("/vendors",(req,res)=>{

db.query(
"SELECT id,name,email,category FROM vendors",
(err,result)=>{
 if(err) return res.status(500).send(err);
 res.send(result);
}
);

});


module.exports = router;