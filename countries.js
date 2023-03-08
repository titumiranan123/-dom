const Loadcountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = countries => {
  countries.forEach( country =>{
    // console.log(country);
    const countryContainer = document.getElementById("countries");
    countryContainer.classList.add('countryd');
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${country.flags.png}">
    <p> Name:${country.name} </p>
    <p> Language:${ country.languages[0].name}  </p>
    <p> Capital:${ country.capital ? country.capital:"no capital"}  </p>
    <button onclick="countryDetials('${country.alpha2Code}')"> Details
    </button>
    `;
    countryContainer.appendChild(div);
  })
//   console.log(countries[0].capital);
};
const countryDetials = code => {
    const url = `https://restcountries.com/v2/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaydata(data))
}
const displaydata = data => {
    console.log(data.flags.svg);
    const  flag = document.getElementById('flag');
    flag.innerHTML = `
    <img src="${data.flags.png}">
    `
}

Loadcountries();
