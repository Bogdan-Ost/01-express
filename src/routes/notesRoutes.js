import { Notes } from '../models/note';

export const getAllNotes = async (req, res) => {
  const notes = await Notes.find();
  res.status(200).json(notes);
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await Notes.findById(noteId);

  if (!note) {
    return res.status(404).json({ message: 'Notes not found' });
  }

  res.status(200).json(note);
};
