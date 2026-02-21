import { useNavigate } from "react-router-dom";

function VendorDashboard(){

const navigate = useNavigate();

return(

<div>

<h2>Welcome Vendor</h2>


<button onClick={()=>navigate("/vendor/add-item")}>
Add Item
</button>

<button onClick={()=>navigate("/vendor/products")}>
Your Item
</button>

<button >
Transaction
</button>

<button onClick={()=>navigate("/")}>
Logout
</button>

</div>

);

}

export default VendorDashboard;