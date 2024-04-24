import { useRef, useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const guestsRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const today = new Date().toISOString().split("T")[0];

  const timeOptions = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
  ];

  return (
    <FormContainerStyled onSubmit={handleSubmit}>
      <div className="input-container">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex-container">
        <div className="input-container select-container">
          <select
            id="guests"
            ref={guestsRef}
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          >
            <option value="">1 Guest</option>
            <option value="2">2 Guest</option>
            <option value="3">3 Guest</option>
            <option value="4">4 Guest</option>
            <option value="5">5 Guest</option>
            <option value="6">6 Guest</option>
          </select>
        </div>
        <div className="input-container select-container">
          <input
            type="date"
            id="date"
            ref={dateRef}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={today}
            required
          />
        </div>
        <div className="input-container select-container">
          <select
            id="time"
            ref={timeRef}
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            {timeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="button-reservation" type="submit">
        Reserve
      </button>
    </FormContainerStyled>
  );
}
const FormContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 70%;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    color: #efe7d2;
  }

  .flex-container {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  .select-container {
    select,
    input[type="date"] {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      color: #000;
      font-size: 15px;
      background: #efe7d2;
    }
  }

  input,
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    font-size: 15px;
  }

  input {
    color: #efe7d2;
    background: transparent;
  }

  input::placeholder {
    color: #efe7d2;
  }

  select option {
  }

  .button-reservation {
    margin-top: 25%;
    width: 50%;
    padding: 0.5rem 1rem;
    background-color: #efe7d2;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;
