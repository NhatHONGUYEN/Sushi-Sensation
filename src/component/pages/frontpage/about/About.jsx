import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import SushiArtistry from "./SushiArtistry";
import TripAdvisor from "./TripAdvisor";
import OurStory from "./OurStory";
import { theme } from "../../../../theme";

export default function About() {
  return (
    <AboutStyled>
      <Navbar />
      <div className="image-left">
        <img src="/image_for_about.jpg" alt="image_for_about" />
      </div>
      <div className="about-text">ABOUT</div>
      <div className="our-story-description">
        <SushiArtistry />
        <TripAdvisor />
        <OurStory />
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  position: relative;
  padding: 10px;
  gap: 10px;

  .image-left {
    img {
      width: 100%;
      height: 100%;
      border-radius: ${theme.borderRadius.extraRound};
    }
  }

  .about-text {
    position: absolute;
    bottom: 5%;
    left: 3%;
    font-size: 6rem;
    color: ${theme.colors.cream};
    letter-spacing: ${theme.spacing.xxs};
  }

  .our-story-description {
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1054px) {
    flex-direction: column;
    overflow-y: scroll;

    .about-text {
      bottom: 45%;
      left: 3%;
      font-size: 6rem;
      position: absolute;
    }
  }

  @media (min-width: 554px) and (max-width: 767px) {
    flex-direction: column;
    overflow-y: scroll;

    .about-text {
      bottom: 60%;
      left: 3%;
      font-size: 60px;
      position: absolute;
    }
  }

  @media (max-width: 554px) {
    flex-direction: column;
    overflow-y: scroll;

    .about-text {
      display: none;
    }
  }
`;
