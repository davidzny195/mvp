-- CreateTable
CREATE TABLE "users" (
    "userId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "balance" DOUBLE PRECISION DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "user_statistics" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "gamesPlayed" INTEGER NOT NULL DEFAULT 0,
    "gamesWon" INTEGER NOT NULL DEFAULT 0,
    "totalEarnings" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "winPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "user_statistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "poker_rooms" (
    "roomId" SERIAL NOT NULL,
    "playerCount" INTEGER NOT NULL,
    "currentPlayerCount" INTEGER NOT NULL DEFAULT 1,
    "roomName" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "smallBlind" INTEGER NOT NULL,
    "bigBlind" INTEGER NOT NULL,
    "gamesCount" INTEGER NOT NULL DEFAULT 0,
    "isPrivate" BOOLEAN NOT NULL DEFAULT false,
    "roomPassword" INTEGER,
    "canJoin" BOOLEAN NOT NULL DEFAULT true,
    "ownerId" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "poker_rooms_pkey" PRIMARY KEY ("roomId")
);

-- CreateTable
CREATE TABLE "game_players" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "player1" INTEGER,
    "player2" INTEGER,
    "player3" INTEGER,
    "player4" INTEGER,
    "player5" INTEGER,
    "player6" INTEGER,
    "player7" INTEGER,
    "player8" INTEGER,
    "player9" INTEGER,
    "gameResultId" INTEGER,

    CONSTRAINT "game_players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Game" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "gameType" TEXT NOT NULL,
    "gameNumber" INTEGER NOT NULL,
    "smallBlind" INTEGER NOT NULL,
    "bigBlind" INTEGER NOT NULL,
    "isFinished" BOOLEAN DEFAULT false,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_actions" (
    "actionId" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "gameId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "actionType" TEXT[],
    "actionAmount" DOUBLE PRECISION NOT NULL,
    "folded" BOOLEAN,
    "handCards" TEXT[],

    CONSTRAINT "player_actions_pkey" PRIMARY KEY ("actionId")
);

-- CreateTable
CREATE TABLE "game_state" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "roomPlayers" TEXT[],
    "smallBlindPlayer" INTEGER NOT NULL,
    "bigBlindPlayer" INTEGER NOT NULL,
    "currentPot" DOUBLE PRECISION NOT NULL,
    "flopCards" TEXT[],
    "turnCard" TEXT,
    "riverCard" TEXT,
    "cardsRemaining" INTEGER NOT NULL DEFAULT 52,
    "cardsDealt" INTEGER NOT NULL DEFAULT 0,
    "cardsBurned" INTEGER NOT NULL DEFAULT 0,
    "lastAction" TEXT,
    "currentPlayer" INTEGER,
    "bettingRound" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "game_state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_history" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "actionType" TEXT NOT NULL,
    "actionAmount" DOUBLE PRECISION,
    "potAmount" DOUBLE PRECISION NOT NULL,
    "folded" BOOLEAN NOT NULL,
    "turnOrder" INTEGER NOT NULL,
    "potWinner" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_history_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_results" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "winnerId" INTEGER NOT NULL,
    "potAmount" DOUBLE PRECISION NOT NULL,
    "hands" TEXT[],
    "playersFolded" TEXT[],
    "winningHand" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "player_results" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "startingBalance" DOUBLE PRECISION NOT NULL,
    "profit" DOUBLE PRECISION NOT NULL,
    "endingBalance" DOUBLE PRECISION NOT NULL,
    "contribution" DOUBLE PRECISION NOT NULL,
    "hasFolded" BOOLEAN NOT NULL,

    CONSTRAINT "player_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_statistics_userId_key" ON "user_statistics"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "poker_rooms_roomId_key" ON "poker_rooms"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "game_players_roomId_key" ON "game_players"("roomId");

-- CreateIndex
CREATE UNIQUE INDEX "game_state_gameId_key" ON "game_state"("gameId");

-- AddForeignKey
ALTER TABLE "user_statistics" ADD CONSTRAINT "user_statistics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_players" ADD CONSTRAINT "game_players_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "poker_rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_players" ADD CONSTRAINT "game_players_gameResultId_fkey" FOREIGN KEY ("gameResultId") REFERENCES "game_results"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "poker_rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_actions" ADD CONSTRAINT "player_actions_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_actions" ADD CONSTRAINT "player_actions_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_state" ADD CONSTRAINT "game_state_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_history" ADD CONSTRAINT "game_history_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_history" ADD CONSTRAINT "game_history_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_results" ADD CONSTRAINT "game_results_winnerId_fkey" FOREIGN KEY ("winnerId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_results" ADD CONSTRAINT "game_results_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_results" ADD CONSTRAINT "player_results_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_results" ADD CONSTRAINT "player_results_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
