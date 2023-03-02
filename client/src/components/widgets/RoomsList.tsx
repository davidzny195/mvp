import { Box, Typography } from '@mui/material';
import { useFetchRooms } from '../../api/rooms';

export default function RoomsList() {
  const { data, isLoading } = useFetchRooms();

  return (
    <Box className="p-4 my-4 bg-[#333333] rounded-md shadow-md text-[#CCCCCC]">
      <Typography className="text-lg">Rooms</Typography>
      <Box className="space-y-4 my-2">
        {!isLoading &&
          data.rooms.map((room: any) => (
            <Box key={room.roomId} className="text-[#CCCCCC] text-sm">
              <Box className="flex justify-between">
                <Box>{room.roomName}</Box>
                {room.canJoin && <Box className="text-green-500">Open</Box>}
              </Box>
              <Box className="text-md">Room Type: {room.roomType}</Box>
              <Box className="flex">
                <Box className="w-1/2">Small Blind:{room.smallBlind}</Box>
                <Box>Big Blind: {room.bigBlind}</Box>
              </Box>
              <Box className="flex">
                <Box className="w-1/2">
                  Players in game: {room.currentPlayerCount}
                </Box>
                <Box>Max players: {room.playerCount}</Box>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
}