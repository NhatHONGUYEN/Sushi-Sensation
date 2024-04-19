import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import styled from "styled-components";

const ContactInfo = () => {
  return (
    <ContactStyled>
      <h1>GET IN TOUCH</h1>
      <div className="hours">
        <p>
          <span>ADDRESS</span>
          <span className="time">
            23 Greenfield Avenue,
            <br />
            Prague 120 00
          </span>
        </p>
        <p>
          <span>PHONE</span> <span className="time">+42 1234 567890</span>
        </p>
        <p>
          <span>EMAIL</span> <span className="time">hello@example.com</span>
        </p>
        <p>
          <span>FOLLOW</span>{" "}
          <span className="time">
            <CiFacebook /> <CiInstagram /> <CiTwitter />{" "}
          </span>
        </p>
      </div>
    </ContactStyled>
  );
};

export default ContactInfo;

const ContactStyled = styled.div`
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  width: 50vh;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
