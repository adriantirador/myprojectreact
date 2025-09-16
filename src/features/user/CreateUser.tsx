import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  MenuItem,
  Stack,
  Box,
} from '@mui/material';

const CreateUser: React.FC = () => {
  const [form, setForm] = useState({
    firstName: '',
    familyName: '',
    age: '',
    gender: '',
    position: '',
    role: '',
    email: '',
    contactNumber: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`User Created: ${form.firstName} ${form.familyName}, Email: ${form.email}`);
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Create User
        </Typography>

        <Stack spacing={2}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Family Name"
              name="familyName"
              value={form.familyName}
              onChange={handleChange}
              fullWidth
              required
            />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="Age"
              name="age"
              type="number"
              value={form.age}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              select
              label="Gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              fullWidth
              required
            >
              <MenuItem value="">Select gender</MenuItem>
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
             <TextField
             label="Birth Date:"
             name="email"
             type="email"
             value={form.email}
             onChange={handleChange}
             fullWidth
             required
             />
             <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              required
             />
          </Stack>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              label="Position"
              name="position"
              value={form.position}
              onChange={handleChange}
              fullWidth
              required
            />
            <TextField
              label="Role"
              name="role"
              value={form.role}
              onChange={handleChange}
              fullWidth
              required
            />
          </Stack>
          
          <TextField
            label="Contact Number"
            name="contactNumber"
            value={form.contactNumber}
            onChange={handleChange}
            fullWidth
            required
          />

          <Button type="submit" variant="contained" fullWidth>
            Create User
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default CreateUser;
