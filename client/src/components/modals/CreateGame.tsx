import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  FormControl,
  InputLabel,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { useCreatePokerRoom } from '../../api/rooms';
import { useSelector } from 'react-redux';

interface GameForm {
  roomName: string;
  playerCount: number;
  roomType: 'brokie' | 'casual' | 'highStakes' | 'deathMatch';
  smallBlind: number;
  bigBlind: number;
}

export default function CreateGame() {
  const [form, setForm] = useState<GameForm>({
    roomName: 'Room 1',
    roomType: 'brokie',
    playerCount: 2,
    smallBlind: 2,
    bigBlind: 4,
  });
  const router = useRouter();
  const createRoomMutation = useCreatePokerRoom();
  const {
    currentUser: { userId },
  } = useSelector((state: any) => state.globalData);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const creation = await createRoomMutation.mutateAsync({
        ownerId: userId,
        ...form,
      });
      if (creation.success) {
        router.push(`/room/${creation.roomId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const steps: Record<GameForm['roomType'], number> = {
    brokie: 2,
    casual: 10,
    highStakes: 1000,
    deathMatch: 10000,
  };

  return (
    <Box className="absolute top-[30%] left-[45%] bg-white">
      <form
        className="flex flex-col space-y-6 px-10 py-4"
        onSubmit={handleSubmit}
      >
        <Typography>Create a room</Typography>
        <TextField
          name="roomName"
          label="Room name"
          value={form.roomName}
          onChange={handleChange}
        />
        <FormControl variant="outlined">
          <InputLabel id="room-type-label">Select Option</InputLabel>
          <Select
            name="roomType"
            labelId="room-type-label"
            value={form.roomType}
            onChange={handleChange}
            label="Select room type"
          >
            <MenuItem value="brokie">Brokie</MenuItem>
            <MenuItem value="casual">Casual</MenuItem>
            <MenuItem value="highStakes">High-stakes</MenuItem>
            <MenuItem value="deathMatch">Deathmatch</MenuItem>
          </Select>
        </FormControl>
        <TextField
          name="playerCount"
          label="Player Count"
          type="number"
          inputProps={{ min: 2, max: 9 }}
          value={form.playerCount}
          onChange={handleChange}
        />
        <TextField
          name="smallBlind"
          label="Small Blind"
          type="number"
          inputProps={{ min: 2, step: steps[form.roomType] }}
          value={form.smallBlind}
          onChange={handleChange}
        />
        <TextField
          name="bigBlind"
          label="Big Blind"
          type="number"
          inputProps={{ min: 4, step: steps[form.roomType] }}
          value={form.bigBlind}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
}
