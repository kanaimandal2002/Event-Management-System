const express = require("express");
const router = express.Router();
const db = require("../config/db");


router.post("/order/add",(req,res)=>{

const {
user_id,
name,
email,
number,
address,
city,
state,
pincode,
payment,
total
} = req.body;


db.query(
`INSERT INTO orders
(user_id,name,email,number,address,city,state,pincode,payment,total)
VALUES(?,?,?,?,?,?,?,?,?,?)`,
[user_id,name,email,number,address,city,state,pincode,payment,total],
(err)=>{
 if(err) return res.status(500).send(err);

 res.send("Order placed");
}
);

});


module.exports = router;