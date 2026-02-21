import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserVendors(){

const [vendors,setVendors] = useState([]);

const navigate = useNavigate();

useEffect(()=>{

axios.get("http://localhost:5000/user/vendors")
.then(res=>{
 setVendors(res.data);
});

},[]);


return(

<div>

<h3>Vendors</h3>

<button onClick={()=>navigate("/")}>
Logout
</button>

{
vendors.map(v=>(
<div key={v.id}>

<h3>{v.name}</h3>

<button
onClick={()=>navigate(`/user/products/${v.id}`)}
>
View Products


</button>

</div>
))
}

</div>

);

}

export default UserVendors;