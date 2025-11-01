import express from 'express';
import { body } from 'express-validator';
import auth from '../middlewares/authMiddleware.js';
import { runValidation } from '../middlewares/validate.js';
import { createTeam, joinTeam, getTeam, getTeams } from '../controllers/teamController.js';

const router = express.Router();

router.post(
  '/',
  auth,
  [ body('teamName').isLength({ min: 2 }) ],
  runValidation,
  createTeam
);

router.post(
  '/join',
  auth,
  [ body('teamCode').isLength({ min: 5, max: 5 }) ],
  runValidation,
  joinTeam
);

router.get('/me', auth, getTeam);
router.get('/:id', auth, getTeam);
router.get('/', auth, getTeams);

export default router;
