import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import styled from "styled-components";
import { theme } from "../../../../theme";

const ContactInfo = () => {
  return (
    <ContactStyled>
      <h1>GET IN TOUCH</h1>
      <div className="contact-info">
        <p>
          <span>ADDRESS</span>
          <span className="contact-list">
            23 Greenfield Avenue, Prague 120 00
          </span>
        </p>
        <p>
          <span>PHONE</span>
          <span className="contact-list">+42 1234 567890</span>
        </p>
        <p>
          <span>EMAIL</span>
          <span className="contact-list">hello@example.com</span>
        </p>
        <p>
          <span>FOLLOW</span>
          <span className="contact-list">
            <CiFacebook /> <CiInstagram /> <CiTwitter />
          </span>
        </p>
      </div>
    </ContactStyled>
  );
};

export default ContactInfo;

const ContactStyled = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.borderLine};

  h1 {
    font-size: ${theme.fonts.size.P4};
    display: flex;
    justify-content: center;
    color: ${theme.colors.cream};
  }

  p {
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: ${theme.colors.cream};
  }

  .contact-list {
    display: flex;

    align-items: center;
  }
`;
