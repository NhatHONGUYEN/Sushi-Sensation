import styled from "styled-components";
import { theme } from "../../../../theme";

export default function ReservationImage() {
  return (
    <ReservationImageStyled
      className="reservation-image
  "
    >
      <div className="book-a-table">
        BOOK <br /> A TABLE
      </div>
    </ReservationImageStyled>
  );
}

const ReservationImageStyled = styled.div`
  flex: 1;
  background-image: url("/image-for-reservation.jpg");
  background-position: center top 15%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: ${theme.borderRadius.extraRound};

  .book-a-table {
    position: absolute;
    bottom: 40px;
    left: 40px;
    color: ${theme.colors.cream};
    font-size: 4rem;
    z-index: 1;
    letter-spacing: ${theme.spacing.xxs};
  }
`;
