import { useState } from "react";
import axios from "axios";

function AddUser(){

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const addUser = async ()=>{

await axios.post(
"http://localhost:5000/admin/users/add",
{
 name,
 email,
 password
}
);

alert("User added");

};

return(

<div>

<h2>Add User</h2>

<input placeholder="Name"
onChange={e=>setName(e.target.value)}
/>

<br/><br/>

<input placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<br/><br/>

<input placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<br/><br/>

<button onClick={addUser}>
Add
</button>

</div>

);

}

export default AddUser;