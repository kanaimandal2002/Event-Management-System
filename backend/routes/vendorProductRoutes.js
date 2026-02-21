const express = require("express");
const router = express.Router();
const db = require("../config/db");


/* ADD PRODUCT */
router.post("/product/add", (req,res)=>{

const {vendor_id,name,price,image} = req.body;

db.query(
"INSERT INTO products(vendor_id,name,price,image) VALUES(?,?,?,?)",
[vendor_id,name,price,image],
(err,result)=>{
 if(err) return res.status(500).send(err);
 res.send("Product Added");
}
);

});


/* GET PRODUCTS */
router.get("/product/:vendorId",(req,res)=>{

const vendorId = req.params.vendorId;

db.query(
"SELECT * FROM products WHERE vendor_id=?",
[vendorId],
(err,result)=>{
 if(err) return res.status(500).send(err);
 res.json(result);
}
);

});


/* UPDATE PRODUCT */
router.put("/product/update/:id",(req,res)=>{

const id = req.params.id;
const {name,price,image} = req.body;

db.query(
"UPDATE products SET name=?,price=?,image=? WHERE id=?",
[name,price,image,id],
(err,result)=>{
 if(err) return res.status(500).send(err);
 res.send("Product Updated");
}
);

});


/* DELETE PRODUCT */
router.delete("/product/delete/:id",(req,res)=>{

const id = req.params.id;

db.query(
"DELETE FROM products WHERE id=?",
[id],
(err,result)=>{
 if(err) return res.status(500).send(err);
 res.send("Product Deleted");
}
);

});


module.exports = router;