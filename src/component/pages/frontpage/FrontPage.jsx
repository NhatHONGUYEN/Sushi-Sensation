import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./navbar/Navbar";
import { FiArrowRightCircle } from "react-icons/fi";

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
            <button className="button_to">
              Menu <span className="spacer"></span>
              <FiArrowRightCircle />
            </button>
          </div>
        </Link>
        <Link to="/reservation">
          <div className="image-container">
            <img src="../../../../women_waiting.jpg" alt="women_waiting" />
            <button className="button_to">
              Reservation <span className="spacer"></span>
              <FiArrowRightCircle />
            </button>
          </div>
        </Link>
        <Link to="/about">
          <div className="image-container">
            <img
              src="../../../../restaurant_place.jpg"
              alt="restaurant_place"
            />
            <button className="button_to">
              Our Story <span className="spacer"></span>
              <FiArrowRightCircle />
            </button>
          </div>
        </Link>
      </div>
    </FrontPageStyled>
  );
}

const FrontPageStyled = styled.div`
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
      bottom: 5%;
      left: 3%;
      font-size: 6rem;
      color: #efe7d2;
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
        border: none;
        position: absolute;
        right: 0;
        bottom: 0;
        cursor: pointer;
        background: black;
        color: #efe7d2;
        width: 170px;
        height: 30px;
        border-top-left-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: forum sans-serif;
        font-size: 20px;
        transform: scale(1);
        transition: transform 0.5s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }

        .spacer {
          margin-right: 10px;
        }
      }
    }
  }
`;
