import { useState } from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import SelectSeat from '../modals/SelectSeat';
import { useFetchRooms } from '../../api/rooms';

export default function RoomsList() {
  const { data, isLoading } = useFetchRooms();
  const [roomId, setRoomId] = useState(null);
  const [open, setOpen] = useState(false);

  return (
    <Box className="p-4 my-4 bg-[#333333] rounded-md shadow-md text-[#CCCCCC]">
      <Typography className="text-lg">Rooms</Typography>
      <Box className="space-y-4 my-2">
        {!isLoading &&
          data.rooms.map((room: any) => (
            <Box
              key={room.roomId}
              className="text-[#CCCCCC] text-sm bg-[#212121] p-2 cursor-pointer rounded-md"
            >
              <Box className="flex justify-between items-center">
                <Box className="flex space-x-2">
                  <Box>{room.roomName}</Box>
                  {room.canJoin ? (
                    <Box className="text-green-500">Open</Box>
                  ) : (
                    <Box className="text-red-500">Full</Box>
                  )}
                </Box>
                {room.canJoin && (
                  <Button
                    size="small"
                    onClick={() => {
                      setRoomId(room.roomId);
                      setOpen(true);
                    }}
                  >
                    Join
                  </Button>
                )}
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
      {roomId && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <div>
            <SelectSeat roomId={roomId} />
          </div>
        </Modal>
      )}
    </Box>
  );
}
