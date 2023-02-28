import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { SignUp } from './types';

export default function SignUpForm() {
  const [form, setForm] = useState<SignUp>({
    username: '',
    email: '',
    password: '',
    verifyPassword: '',
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Box sx={{ maxWidth: 400 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Sign Up
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
            label="Email"
            name="email"
            autoComplete="email"
            fullWidth
            margin="normal"
            type="email"
            value={form.email}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            label="Password"
            name="password"
            autoComplete="new-password"
            fullWidth
            margin="normal"
            type="password"
            value={form.password}
            onChange={(event) => handleChange(event)}
          />
          <TextField
            label="Confirm password"
            name="verifyPassword"
            autoComplete="new-password"
            fullWidth
            margin="normal"
            type="password"
            value={form.verifyPassword}
            onChange={(event) => handleChange(event)}
          />
          <Button
            type="submit"
            variant="contained"
            className="mt-2 text-black hover:text-white"
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </div>
  );
}
