import { useState } from 'react';
import { Box, Container, Tab, Tabs } from '@mui/material';
import { LoginForm, SignUpForm } from './auth';

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabChange = (event: any, newTab: number) => {
    setActiveTab(newTab);
  };

  return (
    <main className="w-screen h-screen">
      <div className="max-w-screen-2xl m-auto">
        <div className="coin-loader-root pl-20">
          <div className="coin-loader-chip coin-loader-chip-1"></div>
          <div className="coin-loader-chip coin-loader-chip-2"></div>
          <div className="coin-loader-chip coin-loader-chip-3"></div>
        </div>
        <Container maxWidth="md" className="pt-32">
          <Box
            className="mb-2 flex justify-center"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tabs
              value={activeTab}
              style={{ justifyContent: 'flex-end' }}
              onChange={handleTabChange}
            >
              <Tab label="Log In" />
              <Tab label="Sign Up" />
            </Tabs>
          </Box>
          <div className="flex justify-end">
            <div>
              {activeTab === 0 && <LoginForm />}
              {activeTab === 1 && <SignUpForm />}
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
