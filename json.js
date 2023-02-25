function dataLoad(){
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(responce => responce.json())
    .then(data=>details(data));
}

function details(data){
    for(const user of data){
        console.log(user.name);
    }
}