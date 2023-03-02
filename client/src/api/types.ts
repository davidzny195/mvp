export interface ResponseData {
  success: boolean;
  message: string;
}

export interface WithToken extends ResponseData {
  token: string;
  user: object;
}

export interface CreatePokerRoomParams {
  roomName: string;
  roomType: string;
  playerCount: number;
  smallBlind: number;
  bigBlind: number;
  ownerId: number;
}
