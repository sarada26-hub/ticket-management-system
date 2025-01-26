// app.js
const express = require("express");
const cors = require("cors");
const ticketRoutes = require("./routes/tickets");

const app = express();
app.use(cors());

// Use ticket routes
app.use(ticketRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
