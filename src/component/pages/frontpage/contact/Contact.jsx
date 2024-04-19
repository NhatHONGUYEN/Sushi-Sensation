import styled from "styled-components";

export default function Contact() {
  return (
    <ContactStyled>
      <div className="Contact">Contact</div>
      <div className="info-for-contact">info-for-contact</div>
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
    background: green;
    width: 50%;
  }
  .info-for-contact {
    background: blue;
    width: 50%;
  }
`;
