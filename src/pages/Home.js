import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      setLoading(true);
      let response = await axios.get("https://randomuser.me/api/");
      setUser(response.data.results[0]); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <UserCard user={user} />
          <button 
            onClick={fetchUser} 
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#000000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              color: "white",
            }}
          >
            Generate New User
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
