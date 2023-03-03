import { useRouter } from 'next/router';
import { Layout } from '../../components';
import { Box } from '@mui/material';

function PokerRoom() {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <Layout>
      <Box className="w-full h-full">
        <div className="m-auto w-[65em] bg-[#4AAD4A] h-1/3 rounded-[10vw] border-[0.8em] border-[#A95555]"></div>
      </Box>
    </Layout>
  );
}

export default PokerRoom;
