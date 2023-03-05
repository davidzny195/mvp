import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import {
  CreateGameStateParams,
  UpdateGameStateParams,
} from '../interfaces/gameTypes';

export default {
  getCurrentGame: async (roomId: number): Promise<any> => {
    try {
      const currentGame = await prisma.game.findFirst({
        where: { roomId, isFinished: false },
      });
      return currentGame;
    } catch (error) {
      throw new Error('Error getting current game');
    }
  },
  createNewGame: async (
    roomId: number,
    gameType: string,
    gameNumber: number,
    smallBlind: number,
    bigBlind: number
  ): Promise<any> => {
    try {
      const game = await prisma.game.create({
        data: {
          roomId,
          gameType,
          gameNumber,
          smallBlind,
          bigBlind,
        },
      });
      return game;
    } catch (error) {
      throw new Error(error);
    }
  },
  endGame: async (gameId: number): Promise<any> => {
    try {
      const updatedGame = await prisma.game.update({
        where: { id: gameId },
        data: { isFinished: true },
      });

      return updatedGame;
    } catch (error) {
      throw new Error('Error updating game');
    }
  },

  getCurrentState: async (): Promise<any> => {},
  initializeState: async (params: CreateGameStateParams): Promise<any> => {
    try {
      const state = await prisma.gameState.create({
        data: params,
      });

      return state;
    } catch (error) {
      throw new Error('Error updating game');
    }
  },
  updateState: async (
    gameId: number,
    params: UpdateGameStateParams
  ): Promise<any> => {
    try {
      const state = await prisma.gameState.update({
        where: { gameId },
        data: params,
      });

      return state;
    } catch (error) {
      throw new Error('Error updating game');
    }
  },

  getHistory: async (): Promise<any> => {},
  createLog: async (): Promise<any> => {},
  updateLog: async (): Promise<any> => {},
};
