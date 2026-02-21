const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/login", (req, res) => {

 const { email, password } = req.body;

 if (!email || !password) {
  return res.json({ success:false, message:"All fields required" });
 }

 const sql = `
 SELECT * FROM users
 WHERE email = ? AND password = ? AND status='active'
 `;

 db.query(sql,[email,password],(err,result)=>{

  if(err) return res.json(err);

  if(result.length === 0){
   return res.json({
    success:false,
    message:"Invalid credentials"
   });
  }

  const user = result[0];

  req.session.user = {
   id:user.id,
   role:user.role,
   name:user.name
  };

  res.json({
   success:true,
   role:user.role,
   name:user.name
  });

 });

});

router.get("/session",(req,res)=>{

 if(req.session.user){
  res.json({
   loggedIn:true,
   user:req.session.user
  });
 }
 else{
  res.json({
   loggedIn:false
  });
 }

});

router.get("/logout",(req,res)=>{
 req.session.destroy();
 res.json({success:true});
});

module.exports = router;