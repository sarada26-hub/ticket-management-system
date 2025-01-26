// services/ticketsService.test.js
// services/ticketsService.test.js
const { tickets, getTicketsForUserType } = require("../../services/ticketsService");


describe("ticketsService", () => {
  it("should return all tickets for regular users", () => {
    const userType = "regular";
    const result = getTicketsForUserType(tickets, userType);
    expect(result).toHaveLength(50);
    expect(result[0]).toHaveProperty("id");
    expect(result[0]).toHaveProperty("title");
    expect(result[0]).toHaveProperty("description");
    expect(result[0]).toHaveProperty("date");
    expect(result[0]).toHaveProperty("location");
    expect(result[0]).toHaveProperty("image");
  });

  it("should return tickets with short description for tourists", () => {
    const result = getTicketsForUserType(tickets, "tourist");
  
    expect(result).toHaveLength(50);
    expect(result[0]).toHaveProperty("shortDescription");
    expect(result[0].shortDescription).toHaveLength(50); // כדי לוודא שהאורך נכון
  });
});
