import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./components/styless/Button";

const Error = () => {
  const Wrapper = styled.section`
    padding: 9rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .btn {
      font-size: 1.8rem;
      margin-top: 3rem;
    }
  `;
  return (
    <Wrapper>
      <img
        src="../images/notFound.svg"
        alt="error image"
        style={{ border: "2px solid blue", width: "50vw", padding: "2rem" }}
      />

      <NavLink to="/">
        <Button className="btn">Go Back</Button>
      </NavLink>
    </Wrapper>
  );
};

export default Error;
