import styled from "styled-components";
import Navbar from "../navbar/Navbar";

export default function Reservation() {
  return (
    <ReservationStyled>
      <Navbar />
      <div className="image-presentation">
        <img
          src="../../../../../public/image-for-reservation.jpg"
          alt="image-for-reservation"
        />
        <div className="book-a-table">
          BOOK <br /> A TABLE
        </div>
      </div>
      <div className="reservation-box">
        <h1>RESERVATION</h1>
        <p>
          Secure your spot at Qitchen, where exceptional sushi and a <br />
          remarkable dining experience await
        </p>
        <form>
          <input type="text" placeholder="Nom" className="name-input" />
          <input type="text" placeholder="Name" className="name-input" />
          <input
            type="text"
            placeholder="Phone Number"
            className="phone-input"
          />
          <input type="text" placeholder="Email" className="email-input" />
          <input type="number" placeholder="Guests" className="guest-input" />
          <input type="date" placeholder="Date" className="date-input" />
          <input type="time" placeholder="Time" className="time-input" />
          <button type="submit" className="reserve-btn">
            Rerserve
          </button>
        </form>
      </div>
    </ReservationStyled>
  );
}

const ReservationStyled = styled.div`
  display: flex;
  height: 97vh;
  margin: 10px;

  .image-presentation {
    flex: 1;
    background-image: url("../../../../../public/image-for-reservation.jpg");
    background-position: center top 15%;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    border-radius: 20px;

    img {
      display: none;
    }

    .book-a-table {
      position: absolute;
      bottom: 40px;
      left: 40px;
      color: #efe7d2;
      font-size: 4rem;
      z-index: 1;
      font-family: forum;
      letter-spacing: 5px;
    }
  }

  .reservation-box {
    width: 50%;
    border: 1px solid #efe7d2;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10vh;
    margin-left: 20px;
    h1 {
      margin-bottom: 35px;
      color: #efe7d2;
    }

    p {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 40px;
      font-size: 20px;
      text-align: center;
      color: #efe7d2;
    }
  }

  form {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, auto);
    grid-template-areas:
      "name name name"
      "phone phone phone"
      "email email email"
      "guests date time"
      "reserve reserve reserve";
    grid-gap: 10px;
    width: 60%;
  }

  form input {
    height: 40px;
    border: none;
    border-radius: 5px;
    padding: 0 10px;
    color: #efe7d2;
    background-color: rgba(0, 0, 0, 0.2);
    outline: none;
  }

  .reserve-btn {
    height: 40px;
    background: #efe7d2;
    color: black;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    margin-top: 10px;
  }

  .name-input {
    grid-area: name;
  }

  .phone-input {
    grid-area: phone;
  }

  .email-input {
    grid-area: email;
  }

  .guest-input {
    grid-area: guests;
  }

  .date-input {
    grid-area: date;
  }

  .time-input {
    grid-area: time;
  }

  .reserve-btn {
    grid-area: reserve;
  }
`;
