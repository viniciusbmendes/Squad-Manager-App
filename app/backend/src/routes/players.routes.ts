import { Request, Router, Response } from 'express';
import PlayersController from '../controllers/PlayersController';

const playersControler = new PlayersController();

const router = Router();

router.get('/', (req: Request, res: Response) => playersControler.getAllPlayers(req, res));
router.post('/', (req: Request, res: Response) => playersControler.addPlayer(req, res));
router.delete('/:id', (req: Request, res: Response) => playersControler.deletePlayer(req, res));

export default router;