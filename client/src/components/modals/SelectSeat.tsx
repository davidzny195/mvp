import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { useJoinOrLeaveRoom, useGetSeating } from '../../api/rooms';

export default function SelectSeat({ roomId }: any) {
  const { data } = useGetSeating(roomId);
  const router = useRouter();
  const joinRoom = useJoinOrLeaveRoom();
  const {
    currentUser: { userId },
  } = useSelector((state: any) => state.globalData);

  const isActiveClass = (position: string) => {
    return `h-10 w-10 rounded-full ${
      data?.[position]
        ? 'bg-blue-500 hover'
        : 'bg-gray-300 hover:bg-blue-200 cursor-pointer'
    }`;
  };

  const handleSelect = async (n: number) => {
    const seat = `player${n}`;
    if (data[seat]) {
      return;
    }
    try {
      const join = await joinRoom.mutateAsync({
        roomId,
        playerId: userId,
        position: n,
      });

      if (join.success) {
        router.push(`/room/${roomId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box className="absolute top-[30%] left-[35%] bg-white w-1/3 p-4 rounded-xl space-y-2">
      <Typography>Select your seat</Typography>
      <Box className="flex justify-between px-24">
        <div
          className={isActiveClass('player9')}
          onClick={() => handleSelect(9)}
        />
        {/* Dealer */}
        <div className="h-10 w-10 bg-black rounded-full" />
        <div
          className={isActiveClass('player1')}
          onClick={() => handleSelect(1)}
        />
      </Box>
      <Box className="flex justify-between items-center px-3">
        <Box className="space-y-16">
          <div
            className={isActiveClass('player2')}
            onClick={() => handleSelect(2)}
          />
          <div
            className={isActiveClass('player3')}
            onClick={() => handleSelect(3)}
          />
        </Box>
        <div className="w-[380px] h-40 bg-[#4AAD4A] rounded-full" />
        <Box className="space-y-16">
          <div
            className={isActiveClass('player4')}
            onClick={() => handleSelect(4)}
          />
          <div
            className={isActiveClass('player5')}
            onClick={() => handleSelect(5)}
          />
        </Box>
      </Box>
      <Box className="flex justify-between px-24">
        <div
          className={isActiveClass('player6')}
          onClick={() => handleSelect(6)}
        />
        <div
          className={isActiveClass('player7')}
          onClick={() => handleSelect(7)}
        />
        <div
          className={isActiveClass('player8')}
          onClick={() => handleSelect(8)}
        />
      </Box>
    </Box>
  );
}
