import styled from "styled-components";
import Navbar from "../navbar/Navbar";
import SushiArtistry from "./SushiArtistry";
import TripAdvisor from "./TripAdvisor";
import OurStory from "./OurStory";
import imageForAbout from "/image_for_about.jpg";

export default function About() {
  return (
    <AboutStyled>
      <Navbar />
      <div className="image-for-about"></div>
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
  justify-content: space-around;
  height: 100vh;
  display: flex;
  position: relative;
  padding: 10px;
  gap: 10px;

  .image-for-about {
    width: 50%;
    background-image: url(${imageForAbout});
    background-position: center left 50;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;
  }

  .about-text {
    position: absolute;
    bottom: 5%;
    left: 3%;
    font-size: 6rem;
    color: #efe7d2;
    letter-spacing: 5px;
  }

  .our-story-description {
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
  }
`;
