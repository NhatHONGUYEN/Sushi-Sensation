import styled from "styled-components";
import { theme } from "../../../theme";

// import video
const VIDEO_SRC = "/front-page-video.mp4";

export default function VideoContainer() {
  return (
    <VideoContainerStyled className="video-container">
      <video className="video" src={VIDEO_SRC} loop autoPlay muted></video>
      <h1 className="title">
        SUSHI <br /> SENSATION
      </h1>
    </VideoContainerStyled>
  );
}

const VideoContainerStyled = styled.div`
  width: 70%;

  .video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${theme.borderRadius.extraRound};
  }
  .title {
    position: absolute;
    bottom: 5%;
    left: 3%;
    font-size: 6rem;
    color: ${theme.colors.cream};
    letter-spacing: ${theme.spacing.xxs};
  }

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;

    .video {
      width: 100%;
      height: 80vh;
      border-radius: ${theme.borderRadius.extraRound};
    }

    .title {
      position: absolute;
      text-align: center;
      bottom: 21%;
      left: 50%;
      transform: translateX(-50%);
      font-size: ${theme.colors.P2 * 2};
      color: ${theme.colors.cream};
      letter-spacing: ${theme.spacing.xxs};
    }
  }
`;
