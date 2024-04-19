import styled from "styled-components";
import OpeningHours from "./OpeningHours";
import Galerie from "./Galerie";

export default function Contact() {
  return (
    <ContactStyled>
      <div className="Contact"></div>
      <div className="info-for-contact">
        <OpeningHours />
        <Galerie />
        <div>Élément 3</div>
        <div>Élément 4</div>
      </div>
    </ContactStyled>
  );
}

const ContactStyled = styled.div`
  background: red;
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
    background: blue;
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
  }
`;
