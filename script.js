/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
    {quote : "The books that the world calls immoral are books that show the world its own shame. ",
     source : "Oscar Wilde. ",
     year : 1890,
     citation : "'The Picture of Dorian Gray', written by Oscar Wilde. "},
    
    {quote : "Nothing is so painful to the human mind as a great and sudden change. ",
     source : "Mary Shelley. ",
     year : 1818,
     citation : "'Frankenstein, or the Modern Prometheus', written by Mary Shelley"},
    
    {quote : "Death has come to your little town, Sheriff. Now, you can either ignore it, or you can help me to stop it. ",
     source : "Donald Pleasance as Dr. Loomis. ",
     year : 1978,
     citation : "'Halloween', co-written by John Carpenter and Debra Hill. "},
    
    {quote : "What ain't no country I've ever heard of. They speak English in What? ",
     source : "Samuel L. Jackson as Jules Winnfield. ",
     year : 1994,
     citation : "'Pulp Fiction', written and directed by Quentin Tarantino. "},
    
    {quote : "This is not 'Nam. This is bowling. There are rules. ",
     source : "John Goodman as Walter Sobchak. ",
     year : 1998,
     citation : "'The Big Lebowski', written and directed by Joel and Ethan Coen. "}
];

/***
 * `getRandomQuote` function
***/


//A little help from "Kelly" (https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array). Almost had it, but her example cleaned up my syntax on the Math.random part.

function getRandomQuote() {
    var generateRandom = quotes[Math.floor(Math.random() * quotes.length)];
        return generateRandom;
}
/***
 * `printQuote` function
***/
/*
<p class="quote">quotes.quote</p>;
        <p class="source">quotes.source<span class="citation">quotes.citation</span><span class="year">quotes.year</span></p>;
*/
//printQuote loops through the quote object's properties and returns a random quote.
function printQuote() {
    for (var i = 0; i < quotes.length; i++) {
        let  quoteVar = getRandomQuote();
        let quoteBox = document.getElementById("quote-box");
        quoteBox.innerHTML = quoteVar.quote + quoteVar.source + quoteVar.citation + quoteVar.year;
    }
}

printQuote();
        

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);