import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  background-color:rgb(81, 40, 40);
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
`;

const UserCard = ({ user }) => {
  console.log("User being rendered:", user); 

  return (
    <Card>
      <img
        src={user.picture.medium}
        alt={user.name.first}
        style={{ borderRadius: "50%" }}
      />
      <h3>{user.name.first} {user.name.last}</h3>
      <p>{user.email}</p>
      <p>{user.location.city}, {user.location.country}</p>
    </Card>
  );
};

export default UserCard;
