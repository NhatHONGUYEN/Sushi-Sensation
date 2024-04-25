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
`;
