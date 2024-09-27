import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from '@mui/material';
import { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export const CreateTask = () => {
  const [inputErrors, setInputErrors] = useState({});
  const formData = useRef({ id: Math.random() });
  const history = useHistory();

  const validateForm = () => {
    let isValid = true;
    const errors = {};
    if (!formData.current.title) {
      errors.title = 'Title required';
      isValid = false;
    }

    if (!formData.current.description) {
      errors.description = 'Description required';
      isValid = false;
    }
    setInputErrors(errors);
    return isValid;
  };

  const onTitleChange = (e) => {
    formData.current.title = e.target.value;
  };

  const onDescriptionChange = (e) => {
    formData.current.description = e.target.value;
  };

  const onPriorityChange = (value) => {
    formData.current.priority = value;
  };

  const onStatusChange = (value) => {
    formData.current.status = value;
  };

  const onDateChange = (value) => {
    formData.current.dueDate = value;
  };

  const submitForm = () => {
    if (validateForm()) {
      const tasks = localStorage.getItem('tasks') || [];
      localStorage.setItem(
        'tasks',
        JSON.stringify([...tasks, formData.current]),
      );
      history.push('/dashboard');
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
      <h1>Create Task</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            label="Title"
            name="title"
            variant="outlined"
            onChange={(e) => onTitleChange(e)}
            error={Boolean(inputErrors.title)}
            helperText={inputErrors.title}
          />
          <TextField
            required
            label="Description"
            name="description"
            variant="outlined"
            onChange={(e) => onDescriptionChange(e)}
            error={Boolean(inputErrors.description)}
            helperText={inputErrors.description}
          />
          <FormControl fullWidth>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              label="Priority"
              id="priority"
              onChange={(e) => onPriorityChange(e.target.value)}
            >
              <MenuItem value={'Low'}>Low</MenuItem>
              <MenuItem value={'Medium'}>Medium</MenuItem>
              <MenuItem value={'High'}>High</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              label="Status"
              id="status"
              onChange={(e) => onStatusChange(e.target.value)}
            >
              <MenuItem value={'Pending'}>Pending</MenuItem>
              <MenuItem value={'In Progress'}>In Progress</MenuItem>
              <MenuItem value={'Completed'}>Completed</MenuItem>
            </Select>
          </FormControl>
          <DatePicker
            disablePast
            label="Due Date"
            onChange={(newValue) =>
              onDateChange(dayjs(newValue).format('DD-MM-YYYY'))
            }
          />
          <Button
            type="submit"
            variant="contained"
            onClick={() => submitForm()}
          >
            Create
          </Button>
        </Paper>
      </LocalizationProvider>
    </Box>
  );
};
