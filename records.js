const data = [
    {
        id: 1,
        question: 'What is my name?',
        answers: [
            {
                id: 1,
                text: 'Correct Answer',
            },
            { id: 2, text: 'Figma' },
            { id: 3, text: 'Convert' },
            { id: 4, text: 'Hello' },
        ],
        correctAnswerId: 1,
    },
    {
        id: 2,
        question: 'What is the correct syntax for a function in JavaScript?',
        answers: [
            { id: 1, text: 'Correct Answer' },
            { id: 2, text: 'Me' },
            { id: 3, text: 'function: myFunction()' },
            { id: 4, text: 'function myFunction' },
        ],
        correctAnswerId: 2,
    },
];

export default data;
