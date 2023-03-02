import { Request, Response } from 'express';
import { roomService } from '../services';

export default {
  getRoom: () => {},
  getRooms: () => {},
  initializeRoom: () => {
    return async (ctx: any) => {
      console.log(ctx.body);
      const ownerId = ctx.req.user.id;

      try {
        // const newRoom = await roomService.initializeRoom(
        //   roomType,
        //   smallBlind,
        //   bigBlind,
        //   ownerId
        // );
        console.log('hi');
        // ctx.res.json(newRoom);
      } catch (error) {
        console.error(error);
        ctx.res.status(400).json({ error: 'Failed to create room' });
      }
    };
  },
  updateRoom: async (req: Request, res: Response): Promise<any> => {},
  getSeating: async (req: Request, res: Response): Promise<any> => {},
  assignSeating: async (req: Request, res: Response): Promise<any> => {},
};
