import {
  createNote,
  deleteNote,
  getAllNotes,
  getNoteById,
} from '../controllers/notesControllers.js';
import { Router } from 'express';

const router = Router();

router.get('/notes', getAllNotes);
router.get('/notes/:noteId', getNoteById);
router.post('/notes', createNote);
router.delete('/notes/:noteId', deleteNote);
router.patch('/notes/:noteId', createNote);

export default router;
