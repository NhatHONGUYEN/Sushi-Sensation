import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";

export default function FrontPage() {
  return (
    <FrontPageStyled>
      <Navbar />
      <div className="left-front-page">
        <video
          className="video"
          src="../../../../public/front-page-video.mp4"
          loop
          autoPlay
          muted
        ></video>

        <h1 className="title">
          SUSHI <br /> SENSATION
        </h1>
      </div>
      <div className="right-front-page">
        <Link to="/menu">
          <div className="image-container">
            <img src="../../../../serve_plate.jpg" alt="serve_plate" />
            <button className="button_to">Menu</button>
          </div>
        </Link>
        <Link to="/reservation">
          <div className="image-container">
            <img src="../../../../women_waiting.jpg" alt="women_waiting" />
            <button className="button_to">Reservation</button>
          </div>
        </Link>
        <Link to="/about">
          <div className="image-container">
            <img
              src="../../../../restaurant_place.jpg"
              alt="restaurant_place"
            />
            <button className="button_to">Our Story</button>
          </div>
        </Link>
      </div>
    </FrontPageStyled>
  );
}

const FrontPageStyled = styled.div`
  background: black;
  height: 100vh;
  display: flex;
  position: relative;

  .left-front-page {
    width: 70%;
    margin: 5px;
    padding: 5px;

    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      border-radius: 20px;
    }
    .title {
      position: absolute;
      bottom: 40px;
      left: 40px;
      color: white;
      font-size: 4rem;
      z-index: 1;
      font-family: forum;
      letter-spacing: 5px;
    }
  }
  .right-front-page {
    flex: 1;
    display: flex;
    height: 95vh;
    margin: 5px;
    flex-direction: column;
    justify-content: space-between;

    .image-container {
      position: relative;
      height: 31.5vh;
      margin-right: 5px;
      margin-top: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
      }

      .button_to {
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }
`;
