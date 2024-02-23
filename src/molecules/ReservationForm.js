import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import useForm from '../hooks/useForm';

//useRef
//makes typing toggle on name field
//would usually be used in a more complex system

//custom hook - useForm
//in this scenario, the custom hook would be helpful to reduce code repetition
//if the application had multiple forms, this hook would be called in more places


const ReservationForm = ({ addReservation }) => {
  const initialState = {
    name: '',
    date: null,
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    }

    return errors;
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(initialState, validate);

  const nameInputRef = useRef(null);

  const handleReservationSubmit = () => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      const reservation = {
        name: values.name,
        date: values.date ? values.date.toISOString() : null,
      };
      addReservation(reservation);
      resetForm();
      nameInputRef.current.focus();
    }
  };

  return (
    <Box mt={2}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <TextField
              required
              label='Name'
              type='text'
              name='name'
              value={values.name}
              onChange={handleChange}
              inputRef={nameInputRef}
              fullWidth
              error={Boolean(errors.name)}
              helperText={errors.name}
            />
          </Grid>
          <Grid item xs={2}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label='Date and Time'
                value={values.date}
                onChange={(newDate) =>
                  handleChange({ target: { name: 'date', value: newDate } })
                }
                renderInput={(props) => <TextField {...props} fullWidth />}
              />
            </LocalizationProvider>
          </Grid>
          <Button
            type='submit'
            variant='contained'
            style={{ backgroundColor: '#F1B6AC', marginTop: '16px' }}
            onClick={handleReservationSubmit}>
            Create Reservation
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

export default ReservationForm;
