// services/ticketsService.js
const tickets = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Ticket ${index + 1}`,
    description: `Detailed description for Ticket ${index + 1}`,
    date: new Date().toISOString().split("T")[0],
    location: `Location ${index + 1}`,
    image: "https://www.w3schools.com/w3images/lights.jpg"
  }));
  
  const getTicketsForUserType = (tickets, userType) => {
    return tickets.map((ticket) => {
      if (userType === "tourist") {
        const shortDescription = ticket.description.substring(0, 50);
        return {
          ...ticket,
          shortDescription: shortDescription.length < 50 ? shortDescription + '...' : shortDescription,
        };
      }
      return ticket;
    });
  };
  
  module.exports = {
    tickets,
    getTicketsForUserType
  };
  