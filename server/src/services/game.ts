import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  getCurrentGame: async (): Promise<any> => {},
  createNewGame: async (): Promise<any> => {},
  endGame: async (): Promise<any> => {},

  getCurrentState: async (): Promise<any> => {},
  initializeState: async (): Promise<any> => {},
  updateState: async (): Promise<any> => {},

  getHistory: async (): Promise<any> => {},
  createLog: async (): Promise<any> => {},
  updateLog: async (): Promise<any> => {},
};
