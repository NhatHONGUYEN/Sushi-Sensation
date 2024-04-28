import styled from "styled-components";
import Form from "./Form";
import { theme } from "../../../../theme";

export default function ReservationBox() {
  return (
    <ReservationBoxStyled>
      <h1>RESERVATION</h1>
      <p>
        Secure your spot at Qitchen, where exceptional sushi and a <br />
        remarkable dining experience await
      </p>
      <Form />
    </ReservationBoxStyled>
  );
}

const ReservationBoxStyled = styled.div`
  width: 50%;
  border: 1px solid ${theme.colors.borderLine};
  border-radius: ${theme.borderRadius.extraRound};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  h1 {
    color: ${theme.colors.cream};
  }

  p {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${theme.fonts.size.P2};
    text-align: center;
    color: ${theme.colors.cream};
    margin: 5% 0 10% 0;
  }

  @media (min-width: 768px) and (max-width: 1042px) {
    height: 100%;
    width: 100%;
    padding-bottom: 20vh;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 10vh 20px 10vh 20px;
  }

  @media (max-width: 430px) {
    width: 100%;
    padding: 5vh;
  }
`;
