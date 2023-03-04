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

export interface UpdatePokerRoomParams {
  roomId: number;
  playerCount?: string;
  currentPlayerCount?: string;
  roomName?: string;
  roomType?: string;
  smallBlind?: number;
  bigBlind?: number;
  gamesCount?: number;
  isPrivate?: boolean;
  roomPassword?: string;
  canJoin?: boolean;
  ownerId?: number;
}
