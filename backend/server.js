const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ===============================
// Middleware
// ===============================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ===============================
// Routes (Ye Add Karein)
// ===============================
const authRoutes = require("./R_outes/authRoutes"); // Folder name 'R_outes' hi rakha hai[cite: 2]
app.use("/api/auth", authRoutes);

// ===============================
// Test Route
// ===============================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "CareerConnect Backend is running!"
    });
});

// ===============================
// Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`CareerConnect server running on http://localhost:${PORT}`);
});