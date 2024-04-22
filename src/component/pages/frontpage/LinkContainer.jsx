import styled from "styled-components";
import LinkItem from "./LinkItem";

export default function LinkContainer() {
  return (
    <LinkContainerStyled className="link-container">
      <LinkItem
        to="/menu"
        imgSrc="/serve_plate.jpg"
        alt="serve_plate"
        label="Menu"
      />
      <LinkItem
        to="/reservation"
        imgSrc="/women_waiting.jpg"
        alt="women_waiting"
        label="Reservation"
      />
      <LinkItem
        to="/about"
        imgSrc="/restaurant_place.jpg"
        alt="restaurant_place"
        label="Our Story"
      />
    </LinkContainerStyled>
  );
}

const LinkContainerStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
