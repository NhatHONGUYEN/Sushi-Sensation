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
        <div className="image">
          <img src="../../../../serve_plate.jpg" alt="serve_plate" />
          <img src="../../../../women_waiting.jpg" alt="women_waiting" />
          <img src="../../../../restaurant_place.jpg" alt="restaurant_place" />
        </div>
      </div>
    </FrontPageStyled>
  );
}

const FrontPageStyled = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  position: relative;
  margin: 5px;

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
    height: 100vh;
    margin: 10px;

    .image {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 32%;
      gap: 5px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
