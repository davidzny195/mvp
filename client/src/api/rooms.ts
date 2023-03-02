import axios from 'axios';
import { useMutation, UseMutationResult } from 'react-query';
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
