import styled from "styled-components";
import { theme } from "../../../../theme";

export default function TripAdvisor() {
  return (
    <TripAdvisorStyled className="trip-michelin-start-container">
      <div className="trip-satisfaction">
        <img src="/stars.png" alt="stars" />
        <h2>TRIP ADVISOR</h2> <p>BEST SUSHI</p>
      </div>
      <div className="trip-satisfaction">
        <img src="/stars.png" alt="stars" />
        <h2>MICHELIN GUIDE</h2> <p>QUALITY FOOD</p>
      </div>
      <div className="trip-satisfaction">
        <img src="/stars.png" alt="stars" />
        <h2>START DINING</h2> <p>COOL VIBE</p>
      </div>
    </TripAdvisorStyled>
  );
}

const TripAdvisorStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10%;

  margin: 10px 0;
  gap: 10px;

  img {
    height: 40px;
    width: 60px;
  }

  .trip-satisfaction {
    border-radius: ${theme.borderRadius.round};
    border: 1px solid ${theme.colors.borderLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100%;
    width: 100%;
    padding-bottom: 10px;

    h2 {
      font-size: ${theme.fonts.size.P2};
      color: ${theme.colors.cream};
    }

    p {
      font-size: ${theme.fonts.size.XXS};
      color: ${theme.colors.cream};
    }
  }

  @media (max-width: 554px) {
    img {
      height: 20px;
      width: 40px;
    }
    .trip-satisfaction {
      h2 {
        font-size: 10px;
      }

      p {
        font-size: 5px;
      }
    }
  }
`;
