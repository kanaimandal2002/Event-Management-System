import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VendorTransaction(){

const navigate = useNavigate();

const [vendors,setVendors] = useState([]);

const category = "Florist"; 


useEffect(()=>{
 fetchVendors();
},[]);



const fetchVendors = async()=>{

try{

const res = await axios.get(
"http://localhost:5000/user/vendors"
);

console.log(res.data);

setVendors(res.data);

}catch(err){

console.log(err);

}

};



const shopItem = (vendorId)=>{
navigate(`/user/vendor-products/${vendorId}`);
};



return(

<div>


{/* HEADER */}

<div style={{
display:"flex",
justifyContent:"space-between",
padding:"20px"
}}>

<button onClick={()=>navigate("/user/dashboard")}>
Home
</button>

<h2>
Vendor – {category}
</h2>

<button onClick={()=>navigate("/")}>
Logout
</button>

</div>



{/* VENDOR CARDS */}

<div style={{
display:"flex",
flexWrap:"wrap",
gap:"20px",
padding:"20px"
}}>

{vendors.length === 0 && (
<p>No vendors found</p>
)}


{vendors.map((vendor)=>(
<div key={vendor.id}
style={{
border:"1px solid black",
padding:"20px",
width:"200px"
}}>

<h3>
{vendor.name}
</h3>

<p>
Contact: {vendor.email}
</p>

<p>
Category: {vendor.category}
</p>

<button onClick={()=>shopItem(vendor.id)}>
Shop Item
</button>

</div>
))}

</div>


</div>

);

}

export default VendorTransaction;