export interface CreateGameStateParams {
  gameId: number;
  roomPlayers: string[];
  smallBlindPlayer: number;
  bigBlindPlayer: number;
  currentPot: number;
  flopCards?: string[];
  turnCard?: string;
  riverCard?: string;
  lastAction?: string;
  currentPlayer?: number;
  bettingRound?: number;
}

export interface UpdateGameStateParams {
  roomPlayers?: string[];
  smallBlindPlayer?: number;
  bigBlindPlayer?: number;
  currentPot?: number;
  flopCards?: string[];
  turnCard?: string;
  riverCard?: string;
  cardsRemaining?: number;
  cardsDealt?: number;
  cardsBurned?: number;
  currentPlayer?: number;
  lastAction?: string;
  bettingRound?: number;
}
