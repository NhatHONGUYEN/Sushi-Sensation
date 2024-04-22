import styled from "styled-components";

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
    position: relative;
    border-radius: 20px;
  }
  .title {
    position: absolute;
    bottom: 5%;
    left: 3%;
    font-size: 6rem;
    color: #efe7d2;
    font-family: forum;
    letter-spacing: 5px;
  }
`;
