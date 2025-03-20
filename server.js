require("dotenv").config();  // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.error("MongoDB Connection Error:", err));

// Home route with database connection status
app.get("/", (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
    res.json({ message: "Welcome to Funniest Comments API!", dbStatus });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


