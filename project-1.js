//Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
      quote:"Tis better to have loved and lost than never to have loved at all.",
      person:  "Alfred Lord Tennyson"
    },
    {
        quote: "To be or not to be, that is the question.",
        person: "William Shakespeare"
    },
    {
        quote: "To err is human; to forgive, divine.",
        person: "Alexander Pope"
    },
    {
        quote: "A rose by any other name would smell as sweet.",
        person:  "William Shakespeare"
    },
    {
        quote: "All that glitters is not gold.",
        person:  "William Shakespeare"
    },
    {
        quote: "Ask not what your country can do for you; ask what you can do for your country.",
        person: "John Kennedy"
    },
    {
        quote: "Eighty percent of success is showing up.",
        person: "Woody Woody Allen"
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

})
