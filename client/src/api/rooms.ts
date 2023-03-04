import axios from 'axios';
import { useQuery, useMutation, UseMutationResult } from 'react-query';
import queryClient from './queryClient';
import { CreatePokerRoomParams, UpdatePokerRoomParams } from './types';

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

export const useGetCurrentRoom = (roomId: number) => {
  return useQuery(['pokerRooms', roomId], async () => {
    const { data } = await axios.get(
      `${process.env.BE_API_URL}/rooms/${roomId}`
    );

    return data;
  });
};

export const useUpdateRoom = () => {
  return useMutation(
    async (params: UpdatePokerRoomParams) => {
      const { roomId, ...payload } = params;

      const { data } = await axios.patch(
        `${process.env.BE_API_URL}/rooms/update/${roomId}`,
        payload
      );
      if (!data.success) {
        throw new Error(data.error);
      }
      return data;
    },
    {
      onSuccess: (data, { roomId }) => {
        queryClient.setQueryData(['pokerRoom', roomId], data);
      },
    }
  );
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

export const useJoinOrLeaveRoom = () => {
  return useMutation(
    async (params: { roomId: number; playerId: number; position: number }) => {
      const { roomId, ...payload } = params;
      const { data } = await axios.patch(
        `${process.env.BE_API_URL}/rooms/update-players/${roomId}`,
        payload
      );
      if (!data.success) {
        throw new Error(data.error);
      }

      return data;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('roomPlayers');
      },
    }
  );
};

export const useDeleteRoom = () => {
  return useMutation(
    async (roomId: number) => {
      const { data } = await axios.delete(
        `${process.env.BE_API_URL}/rooms/delete-room-players/${roomId}`
      );
      if (!data.success) {
        throw new Error(data.error);
      }
      return data;
    },
    {
      onSuccess: (_, roomId) => {
        queryClient.removeQueries(['roomPlayers', roomId]);
      },
    }
  );
};
