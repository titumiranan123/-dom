const loaduser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => dataLoad(data));
};
const dataLoad = user => {
    
    console.log( );
    const name = document.getElementById('name');
    name.innerHTML = user.results[0].name.first+ ' '+user.results[0].name.last;
    const gender = document.getElementById('gender');
    gender.innerHTML = user.results[0].gender;
document.getElementById('title').innerHTML= user.results[0].name.title;
console.log(user.results[0].picture.thumbnail)
const userpic = user.results[0].picture.thumbnail;
// image section
const userContainer = document.getElementById('user-container');
const img = document.createElement('img');
img.setAttribute('src',userpic);
userContainer.appendChild(img);

}
loaduser();