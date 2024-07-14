const quoteText = document.querySelector('.quote');
const authorName = document.querySelector('.author .name');
const quoteBtn = document.querySelector('button');
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");


//Random Quote Function
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    // console.log('CLicked');
    //fetching random quotes/data from the API and parsing it into javascript Object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        // console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");

    })
}

soundBtn.addEventListener("click",()=>{
    // The SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance= new SpeechSynthesisUtterance(`${quoteText.innerText} quote of the day by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click",()=>{
    //copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
    alert("Quote Copied To Clipboard");
})

twitterBtn.addEventListener("click",()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl,"_blank"); //Opening a new twitter tab with passing quote in the url
})

quoteBtn.addEventListener("click", randomQuote);
