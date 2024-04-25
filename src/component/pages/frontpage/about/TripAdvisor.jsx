import styled from "styled-components";

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
    border-radius: 15px;
    border: 1px solid rgba(239, 221, 114, 0.2);
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
`;
