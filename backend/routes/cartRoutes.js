const express = require("express");
const router = express.Router();
const db = require("../config/db");


// ADD TO CART
router.post("/cart/add",(req,res)=>{

const {user_id,product_id} = req.body;

db.query(
"INSERT INTO cart(user_id,product_id,quantity) VALUES(?,?,1)",
[user_id,product_id],
(err,result)=>{
 if(err) return res.status(500).send(err);
 res.send("Added");
});

});



// GET CART
router.get("/cart/:userId",(req,res)=>{

db.query(
`SELECT cart.id, cart.quantity,
product.name,
product.price,
product.image
FROM cart
JOIN product ON cart.product_id = product.id
WHERE cart.user_id=?`,
[req.params.userId],
(err,result)=>{
 if(err) return res.status(500).send(err);
 res.send(result);
});

});



// UPDATE QUANTITY
router.put("/cart/update/:cartId",(req,res)=>{

const {quantity} = req.body;

db.query(
"UPDATE cart SET quantity=? WHERE id=?",
[quantity,req.params.cartId],
(err)=>{
 if(err) return res.status(500).send(err);
 res.send("Updated");
});

});



// REMOVE ONE
router.delete("/cart/remove/:cartId",(req,res)=>{

db.query(
"DELETE FROM cart WHERE id=?",
[req.params.cartId],
(err)=>{
 if(err) return res.status(500).send(err);
 res.send("Removed");
});

});



// REMOVE ALL
router.delete("/cart/remove-all/:userId",(req,res)=>{

db.query(
"DELETE FROM cart WHERE user_id=?",
[req.params.userId],
(err)=>{
 if(err) return res.status(500).send(err);
 res.send("All Removed");
});

});


module.exports = router;