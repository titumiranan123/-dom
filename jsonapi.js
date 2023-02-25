fetch('https://jsonplaceholder.typicode.com/photos')
.then(res=>res.json())
.then(json => display(json));

function display(info){
const photo =document.getElementById('photo');
const div = document.createElement('div');
div.innerText = info;
photo.appendChild(div);
}