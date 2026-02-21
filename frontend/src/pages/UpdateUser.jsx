import { useState } from "react";
import axios from "axios";

function UpdateUser(){

const[userId,setUserId]=useState("");
const[name,setName]=useState("");
const[email,setEmail]=useState("");

const updateUser = async ()=>{

await axios.put(
`http://localhost:5000/admin/users/update/${userId}`,
{
 name,
 email
}
);

alert("User updated");

};

return(

<div>

<h2>Update User</h2>

<input placeholder="User ID"
onChange={e=>setUserId(e.target.value)}
/>

<br/><br/>

<input placeholder="Name"
onChange={e=>setName(e.target.value)}
/>

<br/><br/>

<input placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<br/><br/>

<button onClick={updateUser}>
Update
</button>

</div>

);

}

export default UpdateUser;