import React from "react";
import styled from "styled-components";
import { Button } from "./styless/Button";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Are you prepared to begin?</h3>
            <h3>Contact us now.</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          {/* 1st number column */}
          <div className="footer-about">
            <h3>Toufiq Choudhari</h3>
            <p>Things aren’t always #000000 and #FFFFFF .</p>
          </div>

          {/* 2nd number column */}
          <div className="footer-subscribe">
            <h3>Send an email to get new updates.</h3>
            <form action="https://formspree.io/f/xwkjklkd" method="POST">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
                name="primeMember"
              />
              <input type="submit" value="Prime" />
            </form>
          </div>

          {/* 3rd number column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <a href="https://twitter.com/iamtoufiq15" target="_blank">
                  <FaTwitter className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://m.facebook.com/chaudhary.toufiqahd?eav=AfbWWGqhbiEip6BjE99mFGCNRj3fpeY8vu-gnypO0VoMjm9ENJofBbkxzlSg920Nq2k&paipv=0"
                  target="_blank"
                >
                  <FaFacebook className="icons" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/toufiq-choudhari-56208b203/"
                  target="_blank"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th number column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91- 9359550208</h3>
            <h3>imtoufiq2@gmail.com</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} All Rights Reserved</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1.6rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    .footer-bottom--section {
      padding-top: 9rem;
      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;
      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }
    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
