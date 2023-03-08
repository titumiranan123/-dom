const dataLoad = (search)=>{
    const url = ` https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
    .then(res=>res.json())
    .then((data) => display(data.meals));
}



const display = (meals) =>{
    // console.log(meals);
    const container = document.getElementById('meal-container');
    container.innerHTML ='';

    meals.forEach(element => {
        console.log(element.idMeal);
        
        const div = document.createElement('div');
        div.setAttribute('class','col');
        div.innerHTML =`
                  <div class="card h-100">
                    <img src="${element.strMealThumb}" class="card-img-top p-2 rounded" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${element.strMeal}</h5>
                      <p class="card-text">${element.strInstructions.slice(0,100)}.... </p>
                      <button onclick="mealdetails(${element.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealdetails">
                      Details
                    </button>
                    </div>
                  </div>
        `;
        container.appendChild(div);
    });
    
}
const  mealSearch =()=>{
    const searchValue = document.getElementById('InputField').value;
    dataLoad(searchValue);
    
} 
const mealdetails = idmeal=> {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
  fetch(url)
  .then(res => res.json())
  .then(data => idmealdisplay(data.meals))
  
}
const idmealdisplay =(data)=> {

  // title.innerHTML = data;
  data.forEach(element => {
    const title = document.getElementById('mealtitle');
    title.innerHTML = element.strMeal;
    const body = document.getElementById('modalbody');
    // const img =document.createElement('img');
    body.innerHTML = `
  <p>${element.strInstructions.slice(0,100)}</p>
  <img class="img-fluid" src="${element.strMealThumb}">
    `;
    // body.appendChild(img);
      console.log(element.strMealThumb);
  });
}
dataLoad('fish');