import { useState } from 'react';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { LoginForm, SignUpForm } from './auth';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event: any, newTab: number) => {
    setActiveTab(newTab);
  };

  return (
    <Container maxWidth="sm">
      <Box className="mb-2" sx={{ borderBottom: 1, borderColor: 'divider' }}>
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
