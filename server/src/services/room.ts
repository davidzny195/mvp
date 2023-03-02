import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default {
  getRooms: async (): Promise<any> => {},
  getRoom: async (roomId: number): Promise<any> => {
    try {
      const room = await prisma.pokerRooms.findUnique({ where: { roomId } });
      return room;
    } catch (error) {
      throw new Error('Error getting room');
    }
  },
  initializeRoom: async (
    ownerId: number,
    roomName: string,
    roomType: string,
    playerCount: number,
    smallBlind: number,
    bigBlind: number
  ): Promise<any> => {
    try {
      const room = await prisma.pokerRooms.create({
        data: {
          ownerId,
          playerCount,
          roomName,
          roomType,
          smallBlind,
          bigBlind,
          currentPlayerCount: 1,
        },
      });
      return room;
    } catch (error) {
      throw new Error(error);
    }
  },
  updateRoom: async (): Promise<any> => {},
  getSeating: async (): Promise<any> => {},
  assignSeating: async (
    roomId: number,
    playerId: number,
    seatNum: number
  ): Promise<any> => {
    try {
      const roomPlayer = await prisma.roomPlayers.create({
        data: {
          roomId,
          playerId,
          seatNum,
        },
      });
      return roomPlayer;
    } catch (error) {
      throw new Error(error);
    }
  },
  removePlayer: async (): Promise<any> => {},
};
