import { archivedNotesData, notesData } from './data.js';

export const archiveNote = (noteIndex) => {
  const archivedNote = notesData.splice(noteIndex, 1)[0];
  archivedNotesData.push(archivedNote);
};

export const unarchiveNote = (archivedNoteIndex) => {
  const unarchivedNote = archivedNotesData.splice(archivedNoteIndex, 1)[0];
  notesData.push(unarchivedNote);
};

export const renderSummaryTable = () => {
  // ...
};
