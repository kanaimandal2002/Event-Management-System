import { useNavigate } from "react-router-dom";
import axios from "axios";

function MaintainVendor(){

const navigate = useNavigate();

const logout = async ()=>{

await axios.get(
"http://localhost:5000/logout",
{ withCredentials:true }
);

navigate("/");

};

return(

<div>

<h2>Maintain Vendor</h2>

<div>

<button onClick={()=>navigate("/admin")}>
Home
</button>

<button onClick={logout}>
LogOut
</button>

</div>

<br/><br/>

<div>

<h3>Membership</h3>

<button onClick={()=>navigate("/admin/vendor-membership/add")}>
Add
</button>

<button onClick={()=>navigate("/admin/vendor-membership/update")}>
Update
</button>

</div>

<br/><br/>

<div>

<h3>Vendor Management</h3>

<button onClick={()=>navigate("/admin/vendors/add")}>
Add
</button>

<button onClick={()=>navigate("/admin/vendors/update")}>
Update
</button>

</div>

</div>

);

}

export default MaintainVendor;