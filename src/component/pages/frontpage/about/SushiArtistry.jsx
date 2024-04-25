import styled from "styled-components";
import womenWaiting from "/women_waiting.jpg";
import { theme } from "../../../../theme";

export default function SushiArtistry() {
  return (
    <SushiArtistryStyled className="sushi-women-container">
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
      <div className="image-container">
        <img src={womenWaiting} alt="women_waiting" />
      </div>
    </SushiArtistryStyled>
  );
}

const SushiArtistryStyled = styled.div`
  display: flex;
  width: 100%;
  border-radius: ${theme.borderRadius.round};
  height: 44%;
  gap: 10px;
  border-radius: ${theme.borderRadius.round};

  .sushi-artistry {
    border: 1px solid ${theme.colors.borderLine};
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 50px;
    border-radius: ${theme.borderRadius.round};

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
      position: relative;
      top: -20%;
    }
  }
`;
