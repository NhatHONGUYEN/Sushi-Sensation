import styled from "styled-components";
import imageForAbout from "../../../../../public/image_for_about.jpg";
import womenWaiting from "../../../../../public/women_waiting.jpg";
import cookingForAbout from "../../../../../public/cooking-for-about.jpg";
import Navbar from "../navbar/Navbar";

export default function About() {
  return (
    <AboutStyled>
      <Navbar />
      <div className="image-for-about"></div>
      <div className="our-story-description">
        <div className="sushi-women-container">
          <div className="sushi-artistry">
            <h1>
              SUSHI ARTISTRY <br />
              REDEFINED
            </h1>
            <p>
              Where culinary craftsmanship meets modern elegance. Indulge in the
              finest sushi, expertly curated to elevate your dining experience.
            </p>
          </div>
          <div>
            <img src={womenWaiting} alt="women_waiting" />
          </div>
        </div>
        <div className="trip-michelin-start-container">
          <div className="trip-satisfaction">
            <img src="../../../../../public/stars.png" alt="stars" />
            <h2>TRIP ADVISOR</h2> <p>BEST SUSHI</p>
          </div>
          <div className="trip-satisfaction">
            <img src="../../../../../public/stars.png" alt="stars" />
            <h2>MICHELIN GUIDE</h2> <p>QUALITY FOOD</p>
          </div>
          <div className="trip-satisfaction">
            <img src="../../../../../public/stars.png" alt="stars" />
            <h2>START DINING</h2> <p>COOL VIBE</p>
          </div>
        </div>
        <div className="cooking-our-container">
          <div>
            <img src={cookingForAbout} alt="cooking-for-about" />
          </div>
          <div className="cooking-our-story">
            <h1>OUR STORY</h1>{" "}
            <p>
              Founded with a passion for culinary excellence, Qitchen's journey
              began in the heart of Prague. Over years, it evolved into a haven
              for sushi enthusiasts, celebrated for its artful mastery and
              devotion to redefining gastronomy.
            </p>
          </div>
        </div>
      </div>
    </AboutStyled>
  );
}

const AboutStyled = styled.div`
  height: 97vh;
  margin: 10px;
  display: flex;
  justify-content: space-around;

  .image-for-about {
    width: 50%;
    background-image: url(${imageForAbout});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;

    img {
      display: none;
    }
  }
  .our-story-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 50%;
    padding: 20px;
    gap: 20px;

    .sushi-women-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-radius: 15px;
      height: 45%;
      gap: 15px;

      .sushi-artistry {
        border-radius: 15px;
        border: 1px solid #efe7d2;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 60px 50px;
        border-radius: 15px;

        h1 {
          font-size: 25px;
          color: #efe7d2;
        }

        p {
          font-size: 16px;

          color: #efe7d2;
        }
      }

      img {
        height: 40vh;
        width: 40vh;
        object-fit: cover;
        border-radius: 15px;
      }
    }
  }

  .trip-michelin-start-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    gap: 10px;
    img {
      height: 40px;
      width: 60px;
    }

    .trip-satisfaction {
      border-radius: 15px;
      border: 1px solid #efe7d2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      width: 100%;
      border-radius: 15px;
      padding-bottom: 10px;

      h2 {
        font-size: 20px;
        color: #efe7d2;
      }

      p {
        font-size: 10px;
        color: #efe7d2;
      }
    }
  }

  .cooking-our-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    height: 45%;

    .cooking-our-story {
      height: 100%;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 50px 80px;
      align-items: center;
      border-radius: 15px;
      border: 1px solid;

      color: #efe7d2;

      h1 {
        font-size: 25px;
        color: #efe7d2;
      }
      p {
        font-size: 16px;
        color: #efe7d2;
      }
    }
  }

  img {
    height: 40vh;
    object-fit: cover;
    border-radius: 15px;
    width: 40vh;
  }
`;
