import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function VendorProducts(){

const navigate = useNavigate();

const vendorId = 1;

const [products,setProducts] = useState([]);

const [vendorName,setVendorName] = useState("Vendor Name");


useEffect(()=>{

loadProducts();

},[]);



const loadProducts = async()=>{

const res = await axios.get(
`http://localhost:5000/vendor/product/${vendorId}`
);

setProducts(res.data);

};



// ADD TO CART
const addToCart = async(productId)=>{

await axios.post(
"http://localhost:5000/user/cart/add",
{
product_id: productId,
user_id: 1
}
);

alert("Added to Cart");

};



return(

<div>

{/* TOP BAR */}

<div style={{
display:"flex",
justifyContent:"space-between",
padding:"20px"
}}>

<button onClick={()=>navigate("/vendor")}>
Home
</button>

<h2>{vendorName}</h2>

<button onClick={()=>navigate("/")}>
Logout
</button>

</div>



<h2 style={{marginLeft:"20px"}}>
Products
</h2>



{/* PRODUCTS GRID */}

<div style={{
display:"flex",
gap:"20px",
padding:"20px"
}}>


{products.map((product)=>(

<div key={product.id}
style={{
border:"1px solid gray",
padding:"20px",
width:"200px"
}}>

<h3>
{product.name}
</h3>

<p>
Price: ₹{product.price}
</p>

<button
onClick={()=>addToCart(product.id)}
>
Add to Cart
</button>

</div>

))}


</div>


</div>

);

}

export default VendorProducts;