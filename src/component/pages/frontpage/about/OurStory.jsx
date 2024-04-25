import styled from "styled-components";
import cookingForAbout from "/cooking-for-about.jpg";

export default function OurStory() {
  return (
    <OurStoryStyled className="cooking-our-container">
      <div className="image-container">
        <img src={cookingForAbout} alt="cooking-for-about" />
      </div>
      <div className="cooking-our-story">
        <h1>OUR STORY</h1>{" "}
        <p>
          Founded with a passion for culinary excellence, Qitchen's journey
          began in the heart of Prague. Over years, it evolved into a haven for
          sushi enthusiasts, celebrated for its artful mastery and devotion to
          redefining gastronomy.
        </p>
      </div>
    </OurStoryStyled>
  );
}

const OurStoryStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 44%;

  .cooking-our-story {
    height: 100%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 50px;
    align-items: center;
    border-radius: 15px;
    border: 1px solid rgba(239, 221, 114, 0.2);
    width: 60%;

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

  .image-container {
    width: 40%;
    height: 100%;
    overflow: hidden;
    border-radius: 15px;

    img {
      width: 100%;
    }
  }
`;
