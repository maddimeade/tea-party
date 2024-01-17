import React from 'react';

const ReservationList = ({ reservations }) => {
  return (
    <div>
      <h2>Reservations:</h2>
      <ul>
        {reservations.map((reservation, index) => (
          <li key={index}>
            <strong>Name:</strong> {reservation.name}, <strong>Date:</strong> {reservation.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
