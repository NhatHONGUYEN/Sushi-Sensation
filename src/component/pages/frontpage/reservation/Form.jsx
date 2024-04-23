import { useRef, useState } from "react";
import styled from "styled-components";

export default function Form() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [showGuests, setShowGuests] = useState(false);
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const guestsRef = useRef(null);
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez les données du formulaire ici
  };

  return (
    <FormContainerStyled onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="flex-container">
        <div className="input-container">
          <label
            htmlFor="guests"
            onClick={() => {
              setShowGuests(!showGuests);
              if (showGuests) {
                guestsRef.current.blur();
              } else {
                guestsRef.current.focus();
              }
            }}
          >
            Guests
          </label>
          {showGuests && (
            <select
              id="guests"
              ref={guestsRef}
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          )}
        </div>
        <div className="input-container">
          <label
            htmlFor="date"
            onClick={() => {
              setShowDate(!showDate);
              if (showDate) {
                dateRef.current.blur();
              } else {
                dateRef.current.focus();
              }
            }}
          >
            Date
          </label>
          {showDate && (
            <input
              type="date"
              id="date"
              ref={dateRef}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          )}
        </div>
        <div className="input-container">
          <label
            htmlFor="time"
            onClick={() => {
              setShowTime(!showTime);
              if (showTime) {
                timeRef.current.blur();
              } else {
                timeRef.current.focus();
              }
            }}
          >
            Time
          </label>
          {showTime && (
            <input
              type="time"
              id="time"
              ref={timeRef}
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          )}
        </div>
      </div>
      <button type="submit">Reserve</button>
    </FormContainerStyled>
  );
}

const FormContainerStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 60%;

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }

  .flex-container {
    display: flex;
    gap: 1rem;
    width: 100%;
  }

  input,
  select {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  label,
  input::placeholder,
  select option {
    color: red;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
`;
