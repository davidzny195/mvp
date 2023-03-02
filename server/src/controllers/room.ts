import { Request, Response } from 'express';
import { roomService } from '../services';

export default {
  getRooms: async (req: Request, res: Response): Promise<any> => {
    console.log('no');
  },
  getRoom: async (req: Request, res: Response): Promise<any> => {
    try {
      const { roomId } = req.params;
      const room = await roomService.getRoom(Number(roomId));
      res.status(200).json({ success: true, room });
    } catch (error) {
      res.status(400).json({ success: false, message: 'Error getting room' });
    }
  },
  initializeRoom: async (req: Request, res: Response): Promise<any> => {
    const { ownerId, roomName, roomType, playerCount, smallBlind, bigBlind } =
      req.body;
    try {
      const response = await roomService.initializeRoom(
        ownerId,
        roomName,
        roomType,
        playerCount,
        smallBlind,
        bigBlind
      );
      return res.status(201).send({
        success: true,
        message: 'Successfully created room',
        response,
      });
    } catch (error) {
      res.status(400).send({ success: false, error: error.message });
    }
  },
  updateRoom: async (req: Request, res: Response): Promise<any> => {},

  getSeating: async (req: Request, res: Response): Promise<any> => {},
  assignSeating: async (req: Request, res: Response): Promise<any> => {
    const { roomId, playerId, seatNum } = req.body;
    try {
      const roomPlayer = await roomService.assignSeating(
        roomId,
        playerId,
        seatNum
      );
      res
        .status(201)
        .send({ success: true, message: 'Assigned seat', roomPlayer });
    } catch (error) {
      res.status(500).send({ success: false, error: error.message });
    }
  },
  removePlayer: async (req: Request, res: Response): Promise<any> => {},
};
