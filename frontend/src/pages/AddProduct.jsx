import { useState } from "react";
import axios from "axios";

function AddProduct(){

const[vendorId,setVendorId]=useState("");
const[name,setName]=useState("");
const[price,setPrice]=useState("");
const[image,setImage]=useState("");


const addProduct = async()=>{

await axios.post(
"http://localhost:5000/vendor/product/add",
{
 vendor_id:vendorId,
 name,
 price,
 image
}
);

alert("Product added");

};


return(

<div>

<h2>Add Product</h2>

<input
placeholder="Vendor ID"
onChange={e=>setVendorId(e.target.value)}
/>

<input
placeholder="Product Name"
onChange={e=>setName(e.target.value)}
/>

<input
placeholder="Price"
onChange={e=>setPrice(e.target.value)}
/>

<input
placeholder="Image URL"
onChange={e=>setImage(e.target.value)}
/>

<button onClick={addProduct}>
Add Product
</button>

</div>

);

}

export default AddProduct;