import { useState } from "react";
import axios from "axios";

function UpdateMembership(){

const[membershipId,setMembershipId] = useState("");
const[duration,setDuration] = useState("6 months");

const updateMembership = async ()=>{

await axios.put(
`http://localhost:5000/admin/membership/update/${membershipId}`,
{
 duration
}
);

alert("Membership updated");

};

return(

<div>

<h2>Update Membership</h2>

<input
placeholder="Membership ID"
onChange={e=>setMembershipId(e.target.value)}
/>

<br/><br/>

<select
value={duration}
onChange={e=>setDuration(e.target.value)}
>

<option>6 months</option>
<option>1 year</option>
<option>2 years</option>

</select>

<br/><br/>

<button onClick={updateMembership}>
Update
</button>

</div>

);

}

export default UpdateMembership;