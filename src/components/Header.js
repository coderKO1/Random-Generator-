import React from "react";
import styled from "styled-components";
import logo from "../assets/my-logo.png"; 

const HeaderContainer = styled.header`
  background-color:rgb(48, 48, 48);  
  padding: 20px;
  text-align: center;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const Logo = styled.img`
  height: 50px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" /> 
    </HeaderContainer>
  );
};

export default Header;
