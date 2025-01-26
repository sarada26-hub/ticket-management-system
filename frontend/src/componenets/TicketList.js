import React from "react";

const TicketList = ({ filteredTickets, userType }) => {
  return (
    <div>
      {userType === "local" ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
          {filteredTickets.map((ticket) => (
            <div
              key={ticket.id}
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <h2>{ticket.title}</h2>
              <p>{ticket.description}</p>
              <p>Date: {ticket.date}</p>
              <p>Location: {ticket.location}</p>
            </div>
          ))}
        </div>
      ) : (
        <ul>
          {filteredTickets.map((ticket) => (
            <li key={ticket.id} style={{ marginBottom: "1rem", display: "flex", gap: "1rem" }}>
              <img src={ticket.image} alt={ticket.title} style={{ width: "150px" }} />
              <div>
                <h2>{ticket.title}</h2>
                <p>{ticket.shortDescription}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TicketList;
