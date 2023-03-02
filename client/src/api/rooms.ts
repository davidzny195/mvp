import axios from 'axios';
import { useQuery, useMutation, UseMutationResult } from 'react-query';
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
