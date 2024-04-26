import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import ReservationImage from "./ReservationImage";
import ReservationBox from "./ReservationBox";

export default function Reservation() {
  return (
    <ReservationStyled>
      <Navbar />
      <ReservationImage />
      <ReservationBox />
    </ReservationStyled>
  );
}

const ReservationStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: relative;
  padding: 10px;
  gap: 10px;

  @media (min-width: 768px) and (max-width: 1042px) {
    flex-direction: column;
    overflow: auto;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    overflow: auto;
    gap: 20px;
    padding: 20px;
  }
`;
