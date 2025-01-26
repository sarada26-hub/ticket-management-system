// routes/tickets.js
const express = require("express");
const { tickets, getTicketsForUserType } = require("../services/ticketsService");
const router = express.Router();

router.get("/api/tickets", (req, res) => {
  const { page = 1, userType } = req.query;
  const pageSize = 10;

  // Pagination
  const startIndex = (page - 1) * pageSize;
  const paginatedTickets = tickets.slice(startIndex, startIndex + pageSize);

  // Customize for userType
  const customizedTickets = getTicketsForUserType(paginatedTickets, userType);

  res.json({
    data: customizedTickets,
    totalPages: Math.ceil(tickets.length / pageSize),
  });
});

module.exports = router;
