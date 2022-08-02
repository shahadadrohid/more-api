const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuote(data))
}

const displayQuote = (data) => {
    console.log(data)
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = data.quote;
    console.log(data.quote)
}