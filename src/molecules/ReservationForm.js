import React, { useState, useRef } from 'react';

//useRef
//Used in this example to set focus on the "Name" field, when a new reservation is added.
//We create the ref using useRef
//Then we use the ref attribute to attach the Name input field to our ref.
//Then we use the ref value to focus the input field

const ReservationForm = ({ addReservation }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const nameInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date) {
      const reservation = {
        name,
        date,
      };
      addReservation(reservation);
      setName('');
      setDate('');

      nameInputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameInputRef}
        />
      </label>
      <label>
        Date:
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <button type="submit">Create Reservation</button>
    </form>
  );
};

export default ReservationForm;
