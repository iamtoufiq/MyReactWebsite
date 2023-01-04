import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styless/Button";
import { globalContextHook } from "../Context";

const HeroSection = () => {
  const { images, names } = globalContextHook();
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">My Name is</p>
          <h1 className="hero-heading">{names}</h1>
          <p className="hero-para">
            We love what we do and we do what our clients love & work with great
            clients all over the world to create thoughtful and purposeful
            websites
          </p>

          <Button className="btn hireme-btn">
            <NavLink exact to="/contact">
              Hire me
            </NavLink>
          </Button>
        </div>
        <div className="section-hero-image">
          <picture>
            <img src={images} className="hero-img" alt="hero Image" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }
  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
    border-radius: 2rem;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;
export default HeroSection;
