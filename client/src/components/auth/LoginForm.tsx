import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { UserForm } from './types';

export default function LoginForm() {
  const [form, setForm] = useState<UserForm>({
    username: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>
        <form>
          <TextField
            label="Username"
            name="username"
            autoComplete="username"
            fullWidth
            margin="normal"
            value={form.username}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            label="Password"
            name="password"
            autoComplete="password"
            fullWidth
            margin="normal"
            type="password"
            value={form.password}
            onChange={(event) => handleChange(event)}
          />
          <Button
            type="submit"
            variant="contained"
            className="mt-2 text-black hover:text-white"
          >
            Login
          </Button>
        </form>
      </Box>
    </div>
  );
}
