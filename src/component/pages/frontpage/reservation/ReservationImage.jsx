import styled from "styled-components";

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
  border-radius: 20px;

  .book-a-table {
    position: absolute;
    bottom: 40px;
    left: 40px;
    color: #efe7d2;
    font-size: 4rem;
    z-index: 1;
    font-family: forum;
    letter-spacing: 5px;
  }
`;
