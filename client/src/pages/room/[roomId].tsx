import { useRouter } from 'next/router';
import { Layout } from '../../components';
import { Box, Button } from '@mui/material';

function PokerRoom() {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <Layout>
      <Box className="w-full h-full px-4">
        <Button onClick={() => router.back()}>Leave Room</Button>
      </Box>
    </Layout>
  );
}

export default PokerRoom;
