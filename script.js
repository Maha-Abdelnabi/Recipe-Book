const searchBtn = document.getElementById("search-btn");

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
      console.log("Data:", data);
    });
}
