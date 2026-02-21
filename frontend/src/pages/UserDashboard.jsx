import { useNavigate } from "react-router-dom";

function UserDashboard(){

const navigate = useNavigate();

return(

<div>

<h2>Welcome User</h2>

<button onClick={()=>navigate("/user/vendors")}>
Vendor
</button>

<button onClick={()=>navigate("/user/cart")}>
Cart
</button>

<button>
Guest List
</button>



<button onClick={()=>navigate("/user/orders")}>
Order Status
</button>

<button onClick={()=>navigate("/user/checkout")}>
Checkout
</button>

</div>

);

}

export default UserDashboard;