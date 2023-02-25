document.getElementById("dataLoad").addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((json) => display(json));
  // .then((json) => console.log(json));
});

function display(info) {
    const photo = document.getElementById("photo");
  for (const photoes of info) {
    // console.log(photoes.thumbnailUrl);
    const photos = photoes.thumbnailUrl;
    const img = document.createElement("img");
    img.innerHTML = `<img src="${photos} ">`;
    // console.log(img);
    // const div = document.createElement("div");
    // div.innerText = photoes.thumbnailUrl;
    // photo.appendChild(div);
    photo.appendChild(img);
  }
  //   const photo = document.getElementById("photo");
  //   const div = document.createElement("div");
  //   div.innerText = info;
  //   photo.appendChild(div);
}
