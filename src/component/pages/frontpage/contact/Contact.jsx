import OpeningHours from "./OpeningHours";
import Galerie from "./Galerie";
import ContactInfo from "./ContactInfo";
import styled from "styled-components";
import MapContainerComponent from "./MapContainerComponent";
import Navbar from "../navbar/Navbar";

export default function Contact() {
  return (
    <ContactStyled>
      <div className="contact">
        <Navbar />
        <div className="contact-text">CONTACT</div>
      </div>

      <div className="right-side-for-contact">
        <OpeningHours />
        <Galerie />
        <MapContainerComponent />
        <ContactInfo />
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  gap: 10px;
  position: relative;

  .contact {
    width: 50%;
    background-image: url("/image-for-contact.jpg");
    background-position: center bottom 20%;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;

    img {
      display: none;
    }

    .contact-text {
      position: absolute;
      bottom: 5%;
      left: 3%;
      font-size: 6rem;
      color: #efe7d2;
      font-family: forum;
      letter-spacing: 5px;
    }
  }

  .right-side-for-contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;

    width: 50%;
    height: 100%;
  }
`;
