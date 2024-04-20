import OpeningHours from "./OpeningHours";
import Galerie from "./Galerie";
import ContactInfo from "./ContactInfo";
import styled from "styled-components";
import MapContainerComponent from "./MapContainerComponent";

export default function Contact() {
  return (
    <ContactStyled>
      <div className="Contact"></div>
      <div className="info-for-contact">
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
  justify-content: space-around;
  height: 97vh;
  margin: 10px;
  gap: 10px;

  .Contact {
    flex: 1;
    background-image: url("../../../../../public/image-for-contact.jpg");
    background-position: center bottom 20%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;

    img {
      display: none;
    }
  }
  .info-for-contact {
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
`;
