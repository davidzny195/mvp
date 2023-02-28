import { useState } from 'react';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { LoginForm, SignUpForm } from '../components/auth';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: any, newTab: number) => {
    setActiveTab(newTab);
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Log In" />
          <Tab label="Sign Up" />
        </Tabs>
      </Box>
      {activeTab === 0 && <LoginForm />}
      {activeTab === 1 && <SignUpForm />}
    </Container>
  );
}
