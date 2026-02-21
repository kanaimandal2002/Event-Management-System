import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

const navigate = useNavigate();

const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const login = async ()=>{

const res = await axios.post(
"http://localhost:5000/login",
{
 email,
 password
},
{
 withCredentials:true
}
);

if(res.data.success){

 if(res.data.role==="admin"){
  navigate("/admin");
 }

 else if(res.data.role==="vendor"){
  navigate("/vendor");
 }

 else{
  navigate("/user");
 }

}

else{
 alert(res.data.message);
}

};

return(

<div>

<div className="top-bar">
Event Management System
</div>

<div className="login-body">

<div className="left-section">

<input
type="text"
placeholder="Email Id"
className="input-box"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="input-box"
onChange={(e)=>setPassword(e.target.value)}
/>

</div>

<button onClick={login}>
Login
</button>

</div>
</div>

);

}

export default Login;