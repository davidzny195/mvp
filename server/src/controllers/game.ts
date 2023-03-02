import { Request, Response } from 'express';
import { gameService } from '../services';

export default {
  getCurrentGame: async (req: Request, res: Response): Promise<any> => {},
  createNewGame: async (req: Request, res: Response): Promise<any> => {},
  endGame: async (req: Request, res: Response): Promise<any> => {},

  getCurrentState: async (req: Request, res: Response): Promise<any> => {},
  initializeState: async (req: Request, res: Response): Promise<any> => {},
  updateState: async (req: Request, res: Response): Promise<any> => {},

  getHistory: async (req: Request, res: Response): Promise<any> => {},
  createLog: async (req: Request, res: Response): Promise<any> => {},
  updateLog: async (req: Request, res: Response): Promise<any> => {},
};
