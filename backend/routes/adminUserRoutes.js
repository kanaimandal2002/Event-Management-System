const express = require("express");
const router = express.Router();
const db = require("../config/db");


// ADD USER
router.post("/users/add",(req,res)=>{

const {name,email,password} = req.body;

if(!name || !email || !password){
 return res.json({
  success:false,
  message:"All fields required"
 });
}

const sql = `
INSERT INTO users (name,email,password,role)
VALUES (?,?,?,'user')
`;

db.query(sql,[name,email,password],(err,result)=>{

 if(err){
  console.log(err);
  return res.status(500).json(err);
 }

 res.json({
  success:true,
  message:"User added successfully"
 });

});

});


// GET ALL USERS
router.get("/user/all", (req, res) => {

 const sql = "SELECT * FROM users";

 db.query(sql, (err, result) => {

  if (err) return res.json(err);

  res.json(result);

 });

});


// UPDATE USER
router.put("/users/update/:id",(req,res)=>{

const id = req.params.id;
const {name,email} = req.body;

const sql = `
UPDATE users
SET name=?, email=?
WHERE id=?
`;

db.query(sql,[name,email,id],(err,result)=>{

 if(err){
  console.log(err);
  return res.status(500).json(err);
 }

 res.json({
  success:true,
  message:"User updated successfully"
 });

 });

});


// DELETE USER
router.delete("/user/delete/:id", (req, res) => {

 const id = req.params.id;

 const sql = "DELETE FROM users WHERE id=?";

 db.query(sql, [id], (err, result) => {

  if (err) return res.json(err);

  res.json({
   success: true,
   message: "User deleted"
  });

 });

});

module.exports = router;