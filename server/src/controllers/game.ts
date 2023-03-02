import { Request, Response } from 'express';
import { gameService } from '../services';
import {
  CreateGameStateParams,
  UpdateGameStateParams,
} from '../interfaces/gameTypes';

export default {
  getCurrentGame: async (req: Request, res: Response): Promise<any> => {
    const roomId = Number(req.params.roomId);
    try {
      const currentGame = await gameService.getCurrentGame(roomId);
      if (currentGame) {
        res.status(200).send({
          success: true,
          message: 'Getting current game',
          currentGame,
        });
      } else {
        res
          .status(404)
          .send({ success: false, message: 'No current game found' });
      }
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  },
  createNewGame: async (req: Request, res: Response): Promise<any> => {
    const { roomId, gameType, gameNumber, smallBlind, bigBlind } = req.body;

    try {
      const game = await gameService.createNewGame(
        roomId,
        gameType,
        gameNumber,
        smallBlind,
        bigBlind
      );
      return res
        .status(201)
        .send({ success: true, message: 'Successfully started game', game });
    } catch (error) {
      return res.status(500).send({ success: false, error: error.message });
    }
  },
  endGame: async (req: Request, res: Response): Promise<any> => {
    const { gameId } = req.params;

    try {
      const finishedGame = await gameService.endGame(+gameId);

      res.status(200).send({
        success: true,
        message: `Game ${gameId} ended`,
        finishedGame,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        error: error.message,
      });
    }
  },

  getCurrentState: async (req: Request, res: Response): Promise<any> => {},
  initializeState: async (req: Request, res: Response): Promise<any> => {
    const params: CreateGameStateParams = req.body;
    try {
      const gameState = await gameService.initializeState(params);
      res.send({ success: true, message: 'Initialized game state', gameState });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  },
  updateState: async (req: Request, res: Response): Promise<any> => {
    const gameId = Number(req.params.gameId);
    const params: UpdateGameStateParams = req.body;
    try {
      const gameState = await gameService.updateState(gameId, params);
      res.send({ success: true, message: 'Updated game state', gameState });
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  },

  getHistory: async (req: Request, res: Response): Promise<any> => {},
  createLog: async (req: Request, res: Response): Promise<any> => {},
  updateLog: async (req: Request, res: Response): Promise<any> => {},
};
