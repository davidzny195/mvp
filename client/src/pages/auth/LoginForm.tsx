import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { login } from '../api/auth';
import { UserForm } from './types';

export default function LoginForm() {
  const [form, setForm] = useState<UserForm>({
    email: '',
    password: '',
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await login(form.email, form.password);
    console.log(response);
  };

  return (
    <div>
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            autoComplete="email"
            fullWidth
            margin="normal"
            value={form.email}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            label="Password"
            name="password"
            autoComplete="current-password"
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
