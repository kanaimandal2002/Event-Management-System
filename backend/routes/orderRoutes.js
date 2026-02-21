const express = require("express");
const router = express.Router();
const db = require("../config/db");


// CREATE ORDER
router.post("/order/create",(req,res)=>{

const {user_id,total_amount,payment_method,address} = req.body;

const sql = `
INSERT INTO orders
(user_id,total_amount,payment_method,address,status)
VALUES (?,?,?,?, 'Received')
`;

db.query(sql,
[user_id,total_amount,payment_method,address],
(err,result)=>{

 if(err) return res.json(err);

 res.json({
 success:true,
 order_id: result.insertId
 });

});

});


// GET USER ORDERS
router.get("/order/user/:user_id",(req,res)=>{

const user_id = req.params.user_id;

db.query(
"SELECT * FROM orders WHERE user_id=?",
[user_id],
(err,result)=>{

 if(err) return res.json(err);

 res.json(result);

});

});


// UPDATE ORDER STATUS (Vendor/Admin)
router.put("/order/status/:id",(req,res)=>{

const id = req.params.id;

const {status} = req.body;

db.query(
"UPDATE orders SET status=? WHERE id=?",
[status,id],
(err,result)=>{

 if(err) return res.json(err);

 res.json({
 success:true,
 message:"Status updated"
 });

});

});

module.exports = router;