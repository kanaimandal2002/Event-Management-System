const express = require("express");
const router = express.Router();
const db = require("../config/db");


// ADD VENDOR
router.post("/vendors/add",(req,res)=>{

const {name,email,password,category} = req.body;

if(!name || !email || !password || !category){
 return res.json({
  success:false,
  message:"All fields required"
 });
}

const sql = `
INSERT INTO vendors (name,email,password,category,status)
VALUES (?,?,?,?, 'active')
`;

db.query(sql,[name,email,password,category],(err,result)=>{

 if(err){
  console.log(err);
  return res.status(500).json(err);
 }

 res.json({
  success:true,
  message:"Vendor added successfully"
 });

});

});


// UPDATE VENDOR
// UPDATE VENDOR
router.put("/vendors/update/:id",(req,res)=>{

const id = req.params.id;
const {name,email,category} = req.body;

if(!name || !email || !category){
 return res.json({
  success:false,
  message:"All fields required"
 });
}

const sql = `
UPDATE vendors
SET name=?, email=?, category=?
WHERE id=?
`;

db.query(sql,[name,email,category,id],(err,result)=>{

 if(err){
  console.log(err);
  return res.status(500).json(err);
 }

 res.json({
  success:true,
  message:"Vendor updated successfully"
 });

});

});


// GET ALL VENDORS
router.get("/vendors",(req,res)=>{

db.query(
"SELECT * FROM vendors",
(err,result)=>{

 if(err){
  console.log(err);
  return res.status(500).json(err);
 }

 res.json(result);

});

});


module.exports = router;