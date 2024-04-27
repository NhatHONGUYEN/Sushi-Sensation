import styled from "styled-components";
import { theme } from "../../../../theme";

export default function ReservationImage() {
  return (
    <ReservationImageStyled
      className="reservation-image
  "
    >
      <img src="image-for-reservation.jpg" alt="image-for-reservation.jpg" />
      <div className="book-a-table">
        BOOK <br /> A TABLE
      </div>
    </ReservationImageStyled>
  );
}

const ReservationImageStyled = styled.div`
  width: 50%;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius.extraRound};
  }

  .book-a-table {
    position: absolute;
    bottom: 40px;
    left: 40px;
    color: ${theme.colors.cream};
    font-size: 4rem;
    z-index: 1;
    letter-spacing: ${theme.spacing.xxs};
  }

  @media (min-width: 768px) and (max-width: 1042px) {
    width: 100%;
    height: 100%;

    img {
      width: 100%;

      border-radius: ${theme.borderRadius.extraRound};
    }
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 80vh;

    .book-a-table {
      position: absolute;
      text-align: center;
      bottom: 21%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 40px;
      color: ${theme.colors.cream};
      letter-spacing: ${theme.spacing.xxs};
    }
  }

  @media (max-width: 430px) {
    width: 100%;
    height: 80vh;

    .book-a-table {
      position: absolute;
      text-align: center;
      bottom: 36%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;
