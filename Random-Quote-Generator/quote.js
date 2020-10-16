const QUOTES = [
    {
        "quote":"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "author":"Nelson Mandela"
    },
    {
        "quote":"The way to get started is to quit talking and begin doing.",
        "author":"Walt Disney"
    },
    {
        "quote":"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        "author":"Steve Jobs"
    },
    {
        "quote":"If life were predictable it would cease to be life, and be without flavor." ,
        "author":"Eleanor Roosevelt"
    },
    {
        "quote":"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "author":"James Cameron"
    }
]


document.getElementById("blockquote").innerHTML = QUOTES[0].quote;
document.querySelector("#author").innerHTML =    QUOTES[0].author;

let generateQuote = document.getElementById("generate-quote");
generateQuote.addEventListener('click',function(){
        let index = Math.floor(Math.random()*5);
        document.getElementById("blockquote").innerHTML = QUOTES[index].quote;
        document.querySelector("#author").innerHTML =    QUOTES[index].author;
     
},false);