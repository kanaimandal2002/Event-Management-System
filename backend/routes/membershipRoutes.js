const express = require("express");
const router = express.Router();
const db = require("../config/db");


// ADD MEMBERSHIP
router.post("/membership/add",(req,res)=>{

const {user_id,duration} = req.body;

if(!user_id || !duration){
 return res.json({
  success:false,
  message:"All fields required"
 });
}

const sql = `
INSERT INTO memberships (user_id,duration,status)
VALUES (?,?, 'active')
`;

db.query(sql,[user_id,duration],(err,result)=>{

 if(err){
  console.log(err);
  return res.status(500).json(err);
 }

 res.json({
  success:true,
  message:"Membership added"
 });

});

});


// UPDATE MEMBERSHIP
router.put("/membership/update/:id",(req,res)=>{

const id = req.params.id;
const {duration} = req.body;

const sql = `
UPDATE memberships
SET duration=?
WHERE id=?
`;

db.query(sql,[duration,id],(err,result)=>{

 if(err){
  console.log(err);
  return res.status(500).json(err);
 }

 res.json({
  success:true,
  message:"Membership updated"
 });

});

});


module.exports = router;