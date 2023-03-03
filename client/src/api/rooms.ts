import axios from 'axios';
import {
  useQuery,
  useQueryClient,
  useMutation,
  UseMutationResult,
} from 'react-query';
import { CreatePokerRoomParams } from './types';

export const useCreatePokerRoom = (): UseMutationResult<
  any,
  Error,
  CreatePokerRoomParams
> => {
  const createPokerRoom = async (params: CreatePokerRoomParams) => {
    try {
      const { data } = await axios.post(
        `${process.env.BE_API_URL}/rooms/create`,
        params
      );

      return { ...data };
    } catch (error) {
      throw new Error('Error creating poker room');
    }
  };

  return useMutation(createPokerRoom);
};

export const useFetchRooms = (count: number = 10, page: number = 1) => {
  const fetchRooms = async () => {
    try {
      const { data } = await axios.get(`${process.env.BE_API_URL}/rooms`, {
        params: {
          count,
          page,
        },
      });

      return data;
    } catch (error) {
      throw new Error('Error fetching rooms');
    }
  };

  return useQuery(['pokerRooms', count, page], fetchRooms);
};

export const useGetSeating = (roomId: number) => {
  return useQuery(['roomPlayers', roomId], async () => {
    const { data } = await axios.get(
      `${process.env.BE_API_URL}/rooms/${roomId}/seating`
    );

    if (!data.success) {
      throw new Error(data.error);
    }

    return data.seating;
  });
};

export const useAssignSeating = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (params: { roomId: number; playerId: number; position: string }) => {
      const { data } = await axios.post(
        `${process.env.BE_API_URL}/rooms/start`,
        params
      );

      if (!data.success) {
        throw new Error(data.error);
      }

      return data.roomPlayer;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('roomPlayers');
      },
    }
  );
};

export const useJoinRoom = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (params: { roomId: number; playerId: number; position: number }) => {
      const { data } = await axios.patch(
        `${process.env.BE_API_URL}/rooms/join`,
        params
      );

      if (!data.success) {
        throw new Error(data.error);
      }

      return data.seating;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('roomPlayers');
      },
    }
  );
};
