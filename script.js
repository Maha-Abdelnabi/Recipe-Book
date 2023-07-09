const searchBtn = document.getElementById("search-btn");
const mealList = document.getElementById("meal");

// event listeners
searchBtn.addEventListener("click", getMealList);

// get meal list that matches with the ingredients
function getMealList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((res) => res.json())
    .then((data) => {
      let text = '';
      if(data.meals){
        data.meals.forEach(meal=>{
            text += `
             <div class = "meal-item" data-id = "${meal.idMeal}">
                        <div class = "meal-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "meal-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "recipe-btn">Get Recipe</a>
                        </div>
                    </div>
            `;
        });
      
    }
mealList.innerHTML = text;
});
}
