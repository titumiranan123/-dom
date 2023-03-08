const dataLoad = async (brand) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${brand}`;
  const res = await fetch(url);
  const data = await res.json();
  displayData(data.data);
};

const displayData = (data) => {
  const container = document.getElementById("phoneContainer");
  container.innerText = " ";
  // display 12 phone only
  const showAll = document.getElementById("showall");
  if (data.length >= 10) {
    data = data.slice(0, 12);
    showAll.classList.remove("d-none");
  } else {
    showAll.classList.add("d-none");
  }
  // display no phones found
  const noPhone = document.getElementById("noFound");
  if (data.length == 0) {
    noPhone.classList.remove("d-none");
  } else {
    noPhone.classList.add("d-none");
  }
  // display all phones
  data.forEach((element) => {
    const div = document.createElement("div");
    div.classList.add("col");

    div.innerHTML = `
        <div class="card h-100">
                <img src="${element.image}" class="card-img-top" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${element.phone_name}</h5>
                        <p class="card-text">Thisis a short card<p>
                </div>
        </div>`;
    container.appendChild(div);
    //stop loder
    toggolespiner(false);
  });
};

document.getElementById("search").addEventListener("click", function () {
  // spiner start
  toggolespiner(true);
  const serchText = document.getElementById("searchField").value;
  dataLoad(serchText);
});
const toggolespiner = (isLoading) => {
  const loder = document.getElementById("spin");
  if (isLoading) {
    loder.classList.remove("d-none");
  } else {
    loder.classList.add("d-none");
  }
};
dataLoad("iphone");
