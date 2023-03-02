import { Request, Response } from 'express';
import { roomService } from '../services';

export default {
  getRoom: async (req: Request, res: Response): Promise<any> => {},
  initializeRoom: async (req: Request, res: Response): Promise<any> => {},
  updateRoom: async (req: Request, res: Response): Promise<any> => {},
  getSeating: async (req: Request, res: Response): Promise<any> => {},
  assignSeating: async (req: Request, res: Response): Promise<any> => {},
};
