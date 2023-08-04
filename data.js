export let notesData = [
    {
        name: 'Note 1',
        creationTime: '2023-08-04 12:00',
        content: 'This is note 1 content with a date 3/5/2021',
        category: 'Task',
        archived: false,
    },
    {
        name: 'Shopping List',
        creationTime: '2023-08-04 15:30',
        content: 'Buy groceries for the week. Mentioned date: 3/8/2023.',
        category: 'Task',
        archived: false,
    },
    {
        name: 'Random Thought 1',
        creationTime: '2023-08-05 09:15',
        content: 'I had an interesting idea today.',
        category: 'Random Thought',
        archived: false,
    },
    {
        name: 'Idea 1',
        creationTime: '2023-08-05 14:00',
        content: 'Work on a new project.',
        category: 'Idea',
        archived: false,
    },
    {
        name: 'Note 2',
        creationTime: '2023-08-06 11:45',
        content: 'This is note 2 content with a date 4/5/2021',
        category: 'Task',
        archived: false,
    },
    {
        name: 'Random Thought 2',
        creationTime: '2023-08-06 17:00',
        content: 'I wonder what the future holds.',
        category: 'Random Thought',
        archived: false,
    },
    {
        name: 'Idea 2',
        creationTime: '2023-08-07 08:20',
        content: 'Start learning a new language.',
        category: 'Idea',
        archived: false,
    },
    {
        name: 'Note 3',
        creationTime: '2023-08-07 12:30',
        content: 'This is note 3 content with a date 5/5/2021',
        category: 'Task',
        archived: false,
    },
    {
        name: 'Random Thought 3',
        creationTime: '2023-08-08 09:45',
        content: 'Life is full of surprises.',
        category: 'Random Thought',
        archived: false,
    },
    {
        name: 'Idea 3',
        creationTime: '2023-08-08 16:10',
        content: 'Write a book about my experiences.',
        category: 'Idea',
        archived: false,
    },
];

export let archivedNotesData = [];

export const extractMentionedDates = (content) => {
    const dateRegex = /\d{1,2}\/\d{1,2}\/\d{4}/g;
    return content.match(dateRegex) || [];
};
