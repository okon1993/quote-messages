var quotes = [
    {
        name: "Stephen King",
        quote: "Get busy living, or get busy dying"
    },
    {
        name: "John F. Kennedy",
        quote: "those who dare to fail miserably can achieve greatly"
    },
    {
        name: "Abraham Lincoln",
        quote: "I am a success today because i had a friend who believed in me and i did'nt have the heart to let him down"
    },
    {
        name: "Leonardo Da Vinci",
        quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happen to things"
    },
    {
        name: "Leo Tolstoy",
        quote: "If you want to be happy, be"
    },
]

var quoteBtn = document.querySelector("#quoteBtn");
var quoteAuthor = document.querySelector("#quoteAuthor");
var quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote(){
    var number = Math.floor(Math.random()*quotes.length);
    // console.log(number);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}
