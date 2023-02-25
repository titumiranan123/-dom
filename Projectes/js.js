console.log('hi');
const LoadQuate = ()=>{
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then( data => display(data))
}

const display = (quotes) =>{
    const blockQote = document.getElementById('quotes');
    
    blockQote.innerHTML = quotes.quote;
}
LoadQuate();