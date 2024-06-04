import { Router } from 'express'
import playersRouter from './players.routes'

const router = Router()

router.use('/players', playersRouter);

export default router;