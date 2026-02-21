import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMembership(){

const navigate = useNavigate();

const[userId,setUserId] = useState("");
const[duration,setDuration] = useState("6 months");

const addMembership = async ()=>{

await axios.post(
"http://localhost:5000/admin/membership/add",
{
 user_id:userId,
 duration
}
);

alert("Membership added");

};

return(

<div>

<h2>Add Membership</h2>

<button onClick={()=>navigate("/admin/users")}>
Home
</button>

<br/><br/>

<input
placeholder="User ID"
onChange={e=>setUserId(e.target.value)}
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

<button onClick={addMembership}>
Add
</button>

</div>

);

}

export default AddMembership;