import { useNavigate } from "react-router-dom";
import axios from "axios";

function MaintainUser() {

const navigate = useNavigate();

const logout = async () => {

await axios.get(
"http://localhost:5000/logout",
{ withCredentials:true }
);

navigate("/");

};

return (

<div>

<h2>Maintain User</h2>

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

<button onClick={()=>navigate("/admin/membership/add")}>
Add
</button>

<button onClick={()=>navigate("/admin/membership/update")}>
Update
</button>

</div>

<br/><br/>

<div>

<h3>User Management</h3>

<button onClick={()=>navigate("/admin/users/add")}>
Add
</button>

<button onClick={()=>navigate("/admin/users/update")}>
Update
</button>

</div>

</div>

);

}

export default MaintainUser;