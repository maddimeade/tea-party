import React, { useState, useMemo } from 'react';
import ReservationForm from '../molecules/ReservationForm';
import ReservationList from '../molecules/ReservationList';

//useMemo
//used in this example to memoize our list of reservations
//assures the reservation list will only be rerendered if our reservation list changes

const ReservationPage = () => {
const [reservations, setReservations] = useState([]);

  const addReservation = (reservation) => {
    setReservations([...reservations, reservation]);
  };

  const memoizedReservations = useMemo(() => reservations, [reservations]);

  return (
    <div>
      <ReservationForm addReservation={addReservation} />
      <ReservationList reservations={memoizedReservations} />
    </div>
  );
};
export default ReservationPage;
