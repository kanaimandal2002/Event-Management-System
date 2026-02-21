import { useState } from "react";
import axios from "axios";

function UpdateVendor(){

const[vendorId,setVendorId]=useState("");
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[category,setCategory]=useState("Catering");


const updateVendor = async ()=>{

await axios.put(
`http://localhost:5000/admin/vendors/update/${vendorId}`,
{
 name,
 email,
 category
}
);

alert("Vendor updated successfully");

};


return(

<div>

<h2>Update Vendor</h2>

<input
placeholder="Vendor ID"
onChange={e=>setVendorId(e.target.value)}
/>

<br/><br/>

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

<button onClick={updateVendor}>
Update Vendor
</button>

</div>

);

}

export default UpdateVendor;