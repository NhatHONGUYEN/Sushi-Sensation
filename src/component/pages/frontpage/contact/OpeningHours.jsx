import styled from "styled-components";

const OpeningHours = () => {
  return (
    <OpeningHoursStyled>
      <h1>OPENING HOURS</h1>
      <div className="hours">
        <p>
          <span>Monday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Tuesday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Wednesday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Thursday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Friday</span> <span className="time">16:00 - 22:30</span>
        </p>
        <p>
          <span>Sat & Sun</span> <span className="time">16:00 - 22:30</span>
        </p>
      </div>
    </OpeningHoursStyled>
  );
};

const OpeningHoursStyled = styled.div`
  padding: 10% 5%;
  border-radius: 15px;
  width: 52vh;
  margin-bottom: 7px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(239, 221, 114, 0.2);

  h1 {
    font-size: 35px;
    color: #efe7d2;
  }
  p {
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #efe7d2;
  }

  .hours {
    width: 80%;
  }

  .time {
    text-align: right;
  }
`;

export default OpeningHours;
