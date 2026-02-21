import { useState, useEffect } from "react";
import axios from "axios";

function Membership(){

const [vendorId,setVendorId]=useState("");

const [duration,setDuration]=useState("6 months");

const [memberships,setMemberships]=useState([]);


useEffect(()=>{
 fetchMemberships();
},[]);


const fetchMemberships = async ()=>{

const res = await axios.get(
"http://localhost:5000/admin/membership/all"
);

setMemberships(res.data);

};


const addMembership = async ()=>{

await axios.post(
"http://localhost:5000/admin/membership/add",
{
 vendor_id:vendorId,
 duration
}
);

alert("Membership added");

fetchMemberships();

};


const extendMembership = async(id)=>{

await axios.put(
`http://localhost:5000/admin/membership/extend/${id}`
);

fetchMemberships();

};


const cancelMembership = async(id)=>{

await axios.put(
`http://localhost:5000/admin/membership/cancel/${id}`
);

fetchMemberships();

};


return(

<div>

<h2>Membership</h2>

<input
placeholder="Vendor ID"
onChange={e=>setVendorId(e.target.value)}
/>

<h3>Duration</h3>

<label>
<input
type="radio"
value="6 months"
checked={duration==="6 months"}
onChange={e=>setDuration(e.target.value)}
/>
6 Months
</label>

<label>
<input
type="radio"
value="1 year"
onChange={e=>setDuration(e.target.value)}
/>
1 Year
</label>

<label>
<input
type="radio"
value="2 years"
onChange={e=>setDuration(e.target.value)}
/>
2 Years
</label>

<br/>

<button onClick={addMembership}>
Add Membership
</button>


<h3>Membership List</h3>

<table border="1">

<thead>
<tr>
<th>ID</th>
<th>Vendor ID</th>
<th>Duration</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{
memberships.map(m=>(
<tr key={m.id}>

<td>{m.id}</td>
<td>{m.vendor_id}</td>
<td>{m.duration}</td>
<td>{m.status}</td>

<td>

<button onClick={()=>extendMembership(m.id)}>
Extend
</button>

<button onClick={()=>cancelMembership(m.id)}>
Cancel
</button>

</td>

</tr>
))
}

</tbody>

</table>

</div>

);

}

export default Membership;