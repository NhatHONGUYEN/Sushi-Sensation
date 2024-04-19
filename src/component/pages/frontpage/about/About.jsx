import styled from "styled-components";
import imageForAbout from "../../../../../public/image_for_about.jpg";
import womenWaiting from "../../../../../public/women_waiting.jpg";
import cookingForAbout from "../../../../../public/cooking-for-about.jpg";

export default function About() {
  return (
    <AboutStyled>
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
            TRIP ADVISOR <p>BEST SUSHI</p>
          </div>
          <div className="trip-satisfaction">
            MiCHELIN GUIDE <p>QUALITY FOOD</p>
          </div>
          <div className="trip-satisfaction">
            START DINING <p>COOL VIBE</p>
          </div>
        </div>
        <div className="cooking-our-container">
          <div>
            <img src={cookingForAbout} alt="cooking-for-about" />
          </div>
          <div>
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
    background: green;
    width: 50%;
    padding: 20px;

    .sushi-artistry {
      border: 1px solid red;
      height: 30vh;
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 50px 30px;
      border-radius: 20px;

      h1 {
        font-size: 25px;
      }

      p {
        font-size: 16px;

        color: #333;
      }
    }
  }

  .sushi-women-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 30vh;
      border-radius: 20px;
    }
  }

  .trip-michelin-start-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid blue;
    height: 120px;
    padding: 0 50px;

    .trip-satisfaction {
      border: 1px solid red;
    }
  }

  .cooking-our-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    height: 300px;
    width: 300px;
  }
`;
