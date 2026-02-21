import { useState } from "react";
import axios from "axios";

function AddVendor(){

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[category,setCategory]=useState("Catering");


const addVendor = async ()=>{

await axios.post(
"http://localhost:5000/admin/vendors/add",
{
 name,
 email,
 password,
 category
}
);

alert("Vendor added successfully");

};


return(

<div>

<h2>Add Vendor</h2>

<input
placeholder="Name"
onChange={e=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<br/><br/>

<input
placeholder="Password"
onChange={e=>setPassword(e.target.value)}
/>

<br/><br/>

<select
value={category}
onChange={e=>setCategory(e.target.value)}
>

<option value="Catering">Catering</option>
<option value="Florist">Florist</option>
<option value="Decoration">Decoration</option>
<option value="Lighting">Lighting</option>

</select>

<br/><br/>

<button onClick={addVendor}>
Add Vendor
</button>

</div>

);

}

export default AddVendor;