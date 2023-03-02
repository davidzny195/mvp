import { PrismaClient } from '@prisma/client';

export default {
  getRoom: async (): Promise<any> => {},
  getRooms: async (): Promise<any> => {},
  initializeRoom: async (): Promise<any> => {
    // try {
    //   // Create the new poker room
    //   const newRoom = await prisma.pokerRooms.create({
    //     data: {
    //     },
    //   });
    //   return newRoom;
    // } catch (error) {
    //   console.error(error);
    //   throw new Error('Error creating poker room');
    // }
  },
  updateRoom: async (): Promise<any> => {},
  getSeating: async (): Promise<any> => {},
  assignSeating: async (): Promise<any> => {},
};
