import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || [],
  );

  const onDeleteTask = (id) => {
    setTasks((prev) => {
      const filteredValue = prev.filter((task) => task.id !== id);
      localStorage.setItem('tasks', JSON.stringify(filteredValue));
      return filteredValue;
    });
  };

  return (
    <Box sx={{ padding: '1rem' }}>
      <Typography variant="h2" component="h1">
        Dashboard
      </Typography>
      <Button variant="contained" sx={{ mb: '1rem' }}>
        <Link to={'/create-task'}>Create</Link>
      </Button>
      <Box sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tasks.map((task) => {
          return (
            <Card variant="outlined" sx={{ maxWidth: '15rem' }} key={task.id}>
              <>
                <CardContent>
                  <Typography variant="h5" component="h5">
                    {task.title}
                  </Typography>
                  <Typography component="p">{task.description}</Typography>
                  <Typography component="p">
                    <b>Status: </b> {task.status}
                  </Typography>
                  <Typography component="p">
                    <b>Due Date: </b> {task.dueDate}
                  </Typography>
                  <Typography component="p">
                    <b>Priority: </b> {task.priority}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    delete
                  </Button>
                </CardActions>
              </>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};
