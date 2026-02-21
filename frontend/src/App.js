import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import VendorDashboard from "./pages/VendorDashboard";
import UserDashboard from "./pages/UserDashboard";
import MaintainVendor from "./pages/MaintainVendor";
import MaintainUser from "./pages/MaintainUser";
import Membership from "./pages/Membership";
import AddProduct from "./pages/AddProduct";
import UserVendors from "./pages/UserVendors";

import UserProducts from "./pages/UserProducts";

import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";

import AddMembership from "./pages/AddMembership";
import UpdateMembership from "./pages/UpdateMembership";
import AddUser from "./pages/AddUser";
import UpdateUser from "./pages/UpdateUser";


import AddVendor from "./pages/AddVendor";
import UpdateVendor from "./pages/UpdateVendor";

import VendorAddItem from "./pages/VendorAddItem";

import VendorProducts from "./pages/VendorProducts";

import UserCart from "./pages/UserCart";






function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>} />

<Route path="/admin" element={<AdminDashboard/>} />

<Route path="/vendor" element={<VendorDashboard/>} />

<Route path="/user" element={<UserDashboard/>} />

<Route path="/admin/vendors" element={<MaintainVendor/>} />

<Route path="/admin/users" element={<MaintainUser/>}/>

<Route path="/admin/membership" element={<Membership/>}/>

<Route path="/vendor/add-product" element={<AddProduct/>}/>

<Route path="/user/vendors" element={<UserVendors/>}/>
<Route path="/user/products/:vendor_id" element={<UserProducts/>}/>
<Route path="/user/cart" element={<UserCart/>}/>

<Route path="/user/checkout" element={<Checkout/>}/>
<Route path="/user/orders" element={<OrderStatus/>}/>

<Route path="/admin/membership/add" element={<AddMembership/>}/>
<Route path="/admin/membership/update" element={<UpdateMembership/>}/>

<Route path="/admin/users/add" element={<AddUser/>}/>
<Route path="/admin/users/update" element={<UpdateUser/>}/>

<Route path="/admin/vendors/add" element={<AddVendor/>}/>
<Route path="/admin/vendors/update" element={<UpdateVendor/>}/>

<Route path="/vendor/add-item" element={<VendorAddItem/>}/>

<Route path="/vendor/products" element={<VendorProducts/>}/>


<Route path="/user/cart" element={<UserCart/>}/>


</Routes>

</BrowserRouter>

);

}

export default App;