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
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  width: 50vh;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;
  }
  p {
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .hours {
    width: 90%;
    border: 1px solid red;
  }

  .time {
    text-align: right;
  }
`;

export default OpeningHours;
