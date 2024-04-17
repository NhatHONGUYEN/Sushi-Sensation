import { Link } from "react-router-dom";
import styled from "styled-components";

export default function FrontPage() {
  return (
    <FrontPageStyled>
      {/* <div className="nav">Navbar</div> */}
      <div className="left-front-page">
        <video
          className="video"
          src="../../../../public/set_up_the_bowl.mp4"
          loop
          autoPlay
          muted
        ></video>
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
  border: 1px solid red;
  height: 99vh;
  display: flex;
  position: relative;

  /* .nav {
    border: 1px solid pink;
    position: absolute;
    top: 5vh;
    left: 5vh;
    width: 450px;
    height: 60px;
  } */

  .left-front-page {
    border: 1px solid blue;
    width: 70%;
    margin: 5px;

    .video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-front-page {
    border: 1px solid green;
    flex: 1;
    display: flex;
    height: 95vh;
    margin: 5px;
    flex-direction: column;
    justify-content: space-between;

    .image-container {
      position: relative;
      height: 31vh;
      margin-top: 10px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .button_to {
        position: absolute;
        right: 0;
        bottom: 0;
        /* Add any other button styles here */
      }
    }
  }
`;
