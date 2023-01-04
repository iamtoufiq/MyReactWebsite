import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import styled from "styled-components";
const Header = () => {
  const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 10rem;
    background-color: "#ffffff";
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 150px;
      height: auto;
      border-radius: 2rem;
    }
  `;
  return (
    <MainHeader>
      <NavLink exact to="/">
        <img src="./images/logot.webp" className="logo" alt="logo" />
      </NavLink>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
