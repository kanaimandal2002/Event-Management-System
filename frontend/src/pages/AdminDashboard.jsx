import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {

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

<h2>Admin</h2>

<div>

<button onClick={()=>navigate("/admin")}>
Home
</button>

<button onClick={logout}>
LogOut
</button>

</div>

<br/>

<h3>Welcome Admin</h3>

<br/><br/>

<div>

<button onClick={()=>navigate("/admin/users")}>
Maintain User
</button>

<button onClick={()=>navigate("/admin/vendors")}>
Maintain Vendor
</button>

</div>

</div>

);

}

export default AdminDashboard;