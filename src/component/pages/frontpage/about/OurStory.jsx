import styled from "styled-components";
import cookingForAbout from "/cooking-for-about.jpg";
import { theme } from "../../../../theme";

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
    border-radius: ${theme.borderRadius.round};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 50px;
    align-items: center;
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.borderLine};
    width: 60%;

    color: ${theme.colors.cream};

    h1 {
      font-size: ${theme.fonts.size.P3};
      color: ${theme.colors.cream};
    }
    p {
      font-size: ${theme.fonts.size.P0};
      color: ${theme.colors.cream};
    }
  }

  .image-container {
    width: 40%;
    height: 100%;
    overflow: hidden;
    border-radius: ${theme.borderRadius.round};

    img {
      width: 100%;
    }
  }
`;
