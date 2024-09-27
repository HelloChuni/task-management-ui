import { Box, Button, Paper, TextField } from '@mui/material';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export const Signup = () => {
  const [inputErrors, setInputErrors] = useState({});
  const formData = useRef({});
  const history = useHistory();

  const validateForm = () => {
    let isValid = true;
    const errors = {};
    if (!formData.current.userName) {
      errors.userName = 'User name required';
      isValid = false;
    }

    if (!formData.current.password) {
      errors.password = 'Password required';
      isValid = false;
    }
    setInputErrors(errors);
    return isValid;
  };

  const onUserNameChange = (e) => {
    formData.current.userName = e.target.value;
  };

  const onPasswordChange = (e) => {
    formData.current.password = e.target.value;
  };

  const submitForm = () => {
    if (validateForm()) {
      console.log('Make Api call');
      history.push('/login');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
      }}
    >
      <h1>Signup Page</h1>

      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '1rem',
          gap: '0.5rem',
          minWidth: { md: '30%' },
        }}
        elevation={1}
      >
        <TextField
          required
          label="User Name"
          name="userName"
          variant="outlined"
          onChange={(e) => onUserNameChange(e)}
          error={Boolean(inputErrors.userName)}
          helperText={inputErrors.userName}
        />
        <TextField
          required
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          onChange={(e) => onPasswordChange(e)}
          error={Boolean(inputErrors.password)}
          helperText={inputErrors.password}
        />
        <Button type="submit" variant="contained" onClick={() => submitForm()}>
          Sign up
        </Button>
        <p>
          Already having account? <Link to={'/login'}>Login here </Link>
        </p>
      </Paper>
    </Box>
  );
};
