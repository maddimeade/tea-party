import React, {
  useState,
  useTransition,
  useEffect,
  useDeferredValue,
} from 'react';

//useTransition
//isPending, bool value, whether there is a pending transition
//startTransition, function, mark a state update as a transition, wrapped around "setNewReservations" to treat it as a transition
//this makes the call on setNewReservations to not block the ui
//Not a realistic example, it can help in some scenarios to make an app feel more efficient and responsive 

//useDeferredValue
//gets current value of reservations & returns deferred version of the value
//when the deferred value changes, useEffect will run 
//the deferred value will change, when reservations is changed
//this could be helpful to show existing reservations, while new reservations are loading or being added

const ReservationList = ({ reservations }) => {
  const [isPending, startTransition] = useTransition();
  const [newReservations, setNewReservations] = useState(reservations);

  const deferredReservations = useDeferredValue(reservations);

  useEffect(() => {
    startTransition(() => {
      setNewReservations(deferredReservations);
    });
  }, [deferredReservations, startTransition]);

  const formatDateTime = (dateTimeString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
    };

    return new Date(dateTimeString).toLocaleString(undefined, options);
  };

  return (
    <div>
      <h2>Reservations:</h2>
      <ul>
        {newReservations.map((reservation, index) => (
          <li key={index}>
            <strong>Name:</strong> {reservation.name}, <strong>Date:</strong>{' '}
            {formatDateTime(reservation.date)}
          </li>
        ))}
      </ul>
      {isPending && <p>Loading...</p>}
    </div>
  );
};

export default ReservationList;
