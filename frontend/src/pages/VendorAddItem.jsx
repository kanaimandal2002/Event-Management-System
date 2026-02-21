import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VendorAddItem(){

const navigate = useNavigate();

const vendorName = "Vendor"; // later replace with session

const[name,setName] = useState("");
const[price,setPrice] = useState("");
const[image,setImage] = useState("");

const vendorId = 1; // replace with logged-in vendor id later


const addProduct = async()=>{

if(!name || !price || !image){
 alert("All fields required");
 return;
}

await axios.post(
"http://localhost:5000/vendor/product/add",
{
 vendor_id:vendorId,
 name,
 price,
 image
}
);

alert("Product Added");

setName("");
setPrice("");
setImage("");

};


const logout = ()=>{
navigate("/");
};


return(

<div style={{display:"flex"}}>

{/* LEFT SIDEBAR */}

<div style={{
width:"200px",
background:"#4472c4",
color:"white",
padding:"20px"
}}>

<h3>Welcome {vendorName}</h3>

<br/>

<button onClick={()=>navigate("/vendor/status")}>
Product Status
</button>

<br/><br/>

<button onClick={()=>navigate("/vendor/request")}>
Request Item
</button>

<br/><br/>

<button onClick={()=>navigate("/vendor/products")}>
View Product
</button>

<br/><br/>

<button onClick={logout}>
Log Out
</button>

</div>


{/* MAIN CONTENT */}

<div style={{padding:"30px",flex:1}}>

<h2>Add Item</h2>


{/* DISPLAY SECTION */}

<div>

<h3>Product Image</h3>

<div style={{
width:"200px",
height:"200px",
background:"#ccc"
}}>
Image
</div>

<br/>

<h3>Product Name</h3>

<p>{name}</p>

<h3>Product Price</h3>

<p>Rs/- {price}</p>

<h3>Image Name</h3>

<p>{image}</p>

<h3>Action</h3>

<button>
Update
</button>

<button>
Delete
</button>

</div>


<hr/>


{/* ADD PRODUCT FORM */}

<h3>Add Product</h3>

<input
placeholder="Product Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<br/><br/>

<input
placeholder="Product Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<br/><br/>

<input
placeholder="Product Image Name"
value={image}
onChange={(e)=>setImage(e.target.value)}
/>

<br/><br/>

<button onClick={addProduct}>
Add The Product
</button>

</div>

</div>

);

}

export default VendorAddItem;