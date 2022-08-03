const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // console.log(searchText)
    searchField.value = ' ';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayFood(data.meals))
}

const displayFood = foods => {
    // console.log(foods)
    const foodsDiv = document.getElementById('foods');
    foods.forEach(food => {
        // console.log(food)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
            </div>
        </div>`
        foodsDiv.appendChild(div)
    })
}