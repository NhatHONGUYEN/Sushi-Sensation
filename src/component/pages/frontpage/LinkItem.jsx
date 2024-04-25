import { FiArrowRightCircle } from "react-icons/fi";
import { Button } from "../../../reusible ui/Button";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";

export default function LinkItem({ to, imgSrc, alt, label }) {
  return (
    <Link to={to}>
      <LinkItemStyled>
        <img src={imgSrc} alt={alt} />
        <Button>
          {label}
          <FiArrowRightCircle className="icon" />
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
    border-radius: ${theme.borderRadius.extraRound};
    opacity: 0.6;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover img {
    opacity: 1;
  }

  button {
    opacity: 0.5;
    transition: opacity 0.5s ease-in-out;
  }

  &:hover button {
    opacity: 1;
  }

  .icon {
    margin: 10px;
    opacity: 0.7;
    transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  }

  &:hover .icon {
    transform: translateX(5px);
    opacity: 1;
  }
`;
