import React from "react";

const UserTypeButtons = ({ userType, handleUserTypeChange }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <button
        onClick={() => handleUserTypeChange("local")}
        style={{
          padding: "0.5rem 1rem",
          marginRight: "1rem",
          backgroundColor: userType === "local" ? "#007bff" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Local
      </button>
      <button
        onClick={() => handleUserTypeChange("tourist")}
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: userType === "tourist" ? "#007bff" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Tourist
      </button>
    </div>
  );
};

export default UserTypeButtons;
