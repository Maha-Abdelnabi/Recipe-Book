
// event listeners
searchBtn.addEventListener('click', getMealList);

// get meal list that matches with the ingredients
function getMealList(){
    let searchInputTxt = document.getElementById('search-input').value.trim();
    console.log (searchInputTxt);
}
