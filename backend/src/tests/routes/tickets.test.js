// routes/tickets.test.js
const request = require("supertest");
const express = require("express");
const cors = require("cors");
const ticketRoutes = require("../../routes/tickets");

const app = express();
app.use(cors());
app.use(ticketRoutes);

describe("GET /api/tickets", () => {
  it("should return a paginated list of tickets", async () => {
    const response = await request(app).get("/api/tickets?page=1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.data).toHaveLength(10); // because pageSize = 10
    expect(response.body).toHaveProperty("totalPages");
  });

  it("should return customized tickets for tourists", async () => {
    const response = await request(app).get("/api/tickets?page=1&userType=tourist");
    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty("shortDescription");
    expect(response.body.data[0].shortDescription).toHaveLength(50);
  });

  it("should return full tickets for regular users", async () => {
    const response = await request(app).get("/api/tickets?page=1&userType=regular");
    expect(response.status).toBe(200);
    expect(response.body.data[0]).toHaveProperty("description");
  });
});
