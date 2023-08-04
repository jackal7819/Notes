import { archiveNote, renderSummaryTable, unarchiveNote } from './archive.js';
import { archivedNotesData, notesData } from './data.js';
import { createTableHeader, createTableRow } from './dom.js';

import { extractMentionedDates } from './data.js';

const renderNotesTable = () => {
    const table = document.querySelector('#notesTable');
    table.innerHTML = '';

    const headers = [
        'Name',
        'Created',
        'Category',
        'Content',
        'Dates',
        'Edit',
        'Archive',
        'Delete',
    ];
    createTableHeader(table, headers);

    notesData.forEach((note, index) => {
        const { name, creationTime, content, category } = note;
        const mentionedDates = extractMentionedDates(content);
        const editButton = `<button class="editBtn" data-note-index="${index}">Edit</button>`;
        const archiveButton = note.archived
            ? `<button class="unarchiveBtn" data-archived-note-index="${index}">Unarchive</button>`
            : `<button class="archiveBtn" data-note-index="${index}">Archive</button>`;
        const deleteButton = `<button class="deleteBtn" data-note-index="${index}">Delete</button>`;
        createTableRow(table, [
            name,
            creationTime,
            category,
            content,
            mentionedDates.join(', '),
            editButton,
            archiveButton,
            deleteButton,
        ]);
    });

    const editBtns = document.querySelectorAll('.editBtn');
    const archiveBtns = document.querySelectorAll('.archiveBtn');
    const unarchiveBtns = document.querySelectorAll('.unarchiveBtn');
    const deleteBtns = document.querySelectorAll('.deleteBtn');

    editBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const noteIndex = btn.dataset.noteIndex;
        });
    });

    archiveBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const noteIndex = btn.dataset.noteIndex;
            archiveNote(noteIndex);
            renderNotesTable();
            renderSummaryTable();
        });
    });

    unarchiveBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const archivedNoteIndex = btn.dataset.archivedNoteIndex;
            unarchiveNote(archivedNoteIndex);
            renderNotesTable();
            renderSummaryTable();
        });
    });

    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const noteIndex = btn.dataset.noteIndex;
            notesData.splice(noteIndex, 1);
            renderNotesTable();
            renderSummaryTable();
        });
    });
};

renderNotesTable();

const updateSummaryTable = () => {
    const summaryTable = document.querySelector('#summaryTable');
    summaryTable.innerHTML = '';

    const headers = ['Note Category', 'Active', 'Archived'];
    createTableHeader(summaryTable, headers);

    const categories = ['Task', 'Random Thought', 'Idea'];
    categories.forEach((category) => {
        const activeCount = notesData.filter(
            (note) => note.category === category && !note.archived
        ).length;
        const archivedCount = archivedNotesData.filter(
            (note) => note.category === category
        ).length;
        createTableRow(summaryTable, [category, activeCount, archivedCount]);
    });
};

updateSummaryTable();

const createNoteBtn = document.querySelector('#createNoteBtn');
createNoteBtn.addEventListener('click', () => {
    const newNote = {
        name: 'New Note',
        creationTime: new Date().toLocaleString(),
        content: 'This is a new note.',
        category: 'Task',
        archived: false,
    };
    notesData.push(newNote);
    renderNotesTable();
    renderSummaryTable();
});
