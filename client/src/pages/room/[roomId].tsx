import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { Layout } from '../../components';
import { Box, Button } from '@mui/material';
import { useJoinOrLeaveRoom } from '../../api/rooms';

function PokerRoom() {
  const router = useRouter();
  const {
    currentUser: { userId },
  } = useSelector((state: any) => state.globalData);
  const leave = useJoinOrLeaveRoom();
  const { roomId } = router.query;

  const leaveRoom = () => {
    // must update pokerRooms and roomPlayers + or delete if you are last player
    router.back();
  };

  return (
    <Layout>
      <Box className="w-full h-full px-4">
        <Button onClick={() => leaveRoom()}>Leave Room</Button>
      </Box>
    </Layout>
  );
}

export default PokerRoom;
