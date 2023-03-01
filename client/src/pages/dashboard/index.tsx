import { useState } from 'react';
import { Layout } from '../../components';
import RouteGuard from '../../routes/RouteGuard';
import { Button, Modal } from '@mui/material';
import CreateGame from '../../components/modals/CreateGame';
import { ModalProps } from './types';

function Dashboard() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <div className="h-full w-full flex justify-center items-center">
        <Button variant="contained" onClick={() => setOpen(true)}>
          Create Game
        </Button>
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
