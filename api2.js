function Postdata(data) {
  console.log('click');

  for (const ind of data) {
    const postcontainer = document.getElementById("dataload");
    const p = document.createElement("p");
    p.classList.add("post");
    p.innerText = ind.title;
    postcontainer.appendChild(p);
  }
}

function dataLoad() {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => Postdata(data));
}
document.getElementById("click").addEventListener("click", dataLoad);
