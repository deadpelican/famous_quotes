const quotes = [
    {
        name: 'Leonardo da Vinci',
        quote: 'Learning never exhausts the mind.'
    },
    {
        name: 'Aesop',
        quote: 'No act of kindness, no matter how small, is ever wasted.'
    },
    {
        name: 'J.R.R. Tolkien',
        quote: 'Not all those who wander are lost.'
    },
    {
        name: 'Viktor E. Frankl',
        quote: 'When we are no longer able to change a situation - we are challenged to change ourselves.'
    },
    {
        name: 'Norman Vincent Peale',
        quote: 'Change your thoughts and you change your world.'
    },
    {
        name: 'Edmund Burke',
        quote: 'The only thing necessary for the triumph of evil is for good men to do nothing.'
    },
]

// Target button.
const quoteBtn = document.querySelector('#quoteBtn');
// Target block quote & quote author
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

// displayQuote function
function displayQuote() {
    // generate random num between length of quotes array.
    let number = Math.floor(Math.random() * quotes.length);
    // console.log(number);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}

