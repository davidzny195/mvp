/*
  Warnings:

  - You are about to drop the `Users` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Users";

-- CreateTable
CREATE TABLE "users" (
    "userId" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "poker_rooms" (
    "roomId" SERIAL NOT NULL,
    "playerCount" INTEGER NOT NULL,
    "currentPlayerCount" INTEGER NOT NULL,
    "roomType" TEXT NOT NULL,
    "smallBlind" INTEGER NOT NULL,
    "bigBlind" INTEGER NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "poker_rooms_pkey" PRIMARY KEY ("roomId")
);

-- CreateTable
CREATE TABLE "game_seats" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "seatNum" INTEGER NOT NULL,
    "playerId" INTEGER,

    CONSTRAINT "game_seats_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players_in_game" (
    "playerId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "joinOrder" INTEGER NOT NULL,

    CONSTRAINT "players_in_game_pkey" PRIMARY KEY ("playerId","roomId")
);

-- CreateTable
CREATE TABLE "player_actions" (
    "actionId" SERIAL NOT NULL,
    "playerId" INTEGER NOT NULL,
    "roomId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "actionType" TEXT[],
    "actionAmount" DOUBLE PRECISION NOT NULL,
    "potAmount" DOUBLE PRECISION NOT NULL,
    "folded" BOOLEAN,
    "handCards" TEXT[],

    CONSTRAINT "player_actions_pkey" PRIMARY KEY ("actionId")
);

-- CreateTable
CREATE TABLE "game_state" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "smallBlindPlayer" INTEGER NOT NULL,
    "bigBlindPlayer" INTEGER NOT NULL,
    "currentPot" DOUBLE PRECISION NOT NULL,
    "flopCards" TEXT[],
    "turnCard" TEXT,
    "riverCard" TEXT,
    "cardsRemaining" INTEGER NOT NULL,
    "cardsDealt" INTEGER NOT NULL,
    "cardsBurned" INTEGER NOT NULL,
    "activePlayers" INTEGER[],
    "lastAction" TEXT,
    "gameStage" TEXT NOT NULL,
    "currentPlayer" INTEGER,
    "bettingRound" TEXT,

    CONSTRAINT "game_state_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "game_history" (
    "id" SERIAL NOT NULL,
    "roomId" INTEGER NOT NULL,
    "roundNumber" INTEGER NOT NULL,
    "playerId" INTEGER NOT NULL,
    "actionType" TEXT NOT NULL,
    "actionAmount" DOUBLE PRECISION,
    "potAmount" DOUBLE PRECISION NOT NULL,
    "folded" BOOLEAN NOT NULL,
    "turnOrder" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "game_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "poker_rooms_ownerId_key" ON "poker_rooms"("ownerId");

-- AddForeignKey
ALTER TABLE "poker_rooms" ADD CONSTRAINT "poker_rooms_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_seats" ADD CONSTRAINT "game_seats_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "poker_rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_in_game" ADD CONSTRAINT "players_in_game_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players_in_game" ADD CONSTRAINT "players_in_game_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "poker_rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_actions" ADD CONSTRAINT "player_actions_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "player_actions" ADD CONSTRAINT "player_actions_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "poker_rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_state" ADD CONSTRAINT "game_state_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "poker_rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_history" ADD CONSTRAINT "game_history_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "users"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "game_history" ADD CONSTRAINT "game_history_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "poker_rooms"("roomId") ON DELETE RESTRICT ON UPDATE CASCADE;
