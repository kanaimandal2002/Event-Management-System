const express = require("express");
const cors = require("cors");
const session = require("express-session");

// CREATE APP FIRST (VERY IMPORTANT)
const app = express();

// IMPORT ROUTES AFTER app creation
const authRoutes = require("./routes/authRoutes");
const adminVendorRoutes = require("./routes/adminVendorRoutes");
const adminUserRoutes = require("./routes/adminUserRoutes");
const membershipRoutes = require("./routes/membershipRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const vendorProductRoutes = require("./routes/vendorProductRoutes");

const userVendorRoutes = require("./routes/userVendorRoutes");

const cartRoutes = require("./routes/cartRoutes");







// MIDDLEWARE
app.use(cors({
 origin: "http://localhost:3000",
 credentials: true
}));

app.use(express.json());

app.use(session({
 secret: "secret",
 resave: false,
 saveUninitialized: false
}));

// USE ROUTES AFTER app is created
app.use("/", authRoutes);
app.use("/admin", adminVendorRoutes);
app.use("/admin", adminUserRoutes);
app.use("/admin", membershipRoutes);
app.use("/user", userRoutes);
app.use("/user", orderRoutes);
app.use("/vendor", vendorProductRoutes);
app.use("/user", userVendorRoutes);
app.use("/user", cartRoutes);


// START SERVER
app.listen(5000, () => {
 console.log("Server running on port 5000");
});