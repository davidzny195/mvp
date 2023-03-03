import { useState } from 'react';
import { Layout, RoomsList, CreateGame } from '../../components';
import RouteGuard from '../../routes/RouteGuard';
import { Button, Modal } from '@mui/material';

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <div className="w-full p-8">
        <div className="w-1/3">
          <Button variant="contained" onClick={() => setOpen(true)}>
            Create Game
          </Button>

          <RoomsList />
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div>
          <CreateGame />
        </div>
      </Modal>
    </Layout>
  );
}

export default RouteGuard(Dashboard);
