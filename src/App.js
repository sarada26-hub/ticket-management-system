import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchInput from "./componenets/SearchInput";
import UserTypeButtons from "./componenets/UserTypeButtons";
import TicketList from "./componenets/TicketList";

function App() {
  const [tickets, setTickets] = useState([]);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [userType, setUserType] = useState("local");
  const [searchQuery, setSearchQuery] = useState("");

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:5000/api/tickets?page=${page}&userType=${userType}`
      );
      setTickets((prev) => [...prev, ...response.data.data]);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredTickets(tickets);
    } else {
      setFilteredTickets(
        tickets.filter((ticket) =>
          (ticket.title && ticket.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (ticket.description && ticket.description.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      );
    }
  }, [searchQuery, tickets]);

  useEffect(() => {
    fetchTickets();
  }, [page, userType]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 10 &&
      !loading &&
      page < totalPages
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, page, totalPages]);

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setTickets([]);
    setPage(1);
  };

  return (
    <div>
      <h1>Tickets</h1>

      <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UserTypeButtons userType={userType} handleUserTypeChange={handleUserTypeChange} />
      <TicketList filteredTickets={filteredTickets} userType={userType} />

      {loading && <p>Loading...</p>}
    </div>
  );
}

export default App;
