import styled from "styled-components";
import womenWaiting from "/women_waiting.jpg";

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
  border-radius: 15px;
  height: 44%;
  gap: 10px;

  .sushi-artistry {
    border-radius: 15px;
    border: 1px solid rgba(239, 221, 114, 0.2);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 50px;
    border-radius: 15px;
    width: 60%;

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
      position: relative;
      top: -20%;
    }
  }
`;
