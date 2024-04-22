import { FiArrowRightCircle } from "react-icons/fi";
import Button from "../../../reusible ui/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function LinkItem({ to, imgSrc, alt, label }) {
  return (
    <Link to={to}>
      <LinkItemStyled className="image-container">
        <img src={imgSrc} alt={alt} />
        <Button className="button_to">
          {label} <span className="spacer"></span>
          <FiArrowRightCircle />
        </Button>
      </LinkItemStyled>
    </Link>
  );
}
const LinkItemStyled = styled.div`
  position: relative;
  height: 31.5vh;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
