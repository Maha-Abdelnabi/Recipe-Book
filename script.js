const API_KEY = "48daae8267bc447b96969729bab86ecb";
const recipeListEl = document.getElementById("recipe-list")

//function to pass the recipe data as an input
function displayRecipes(recipes){
    recipeListEl.innerHTML = " "
    //we want 10 recipes
    recipes.forEach((recipe) =>{
     //create elements and add it to the class
        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");
        //add img
        recipeImgEl = document.createElement("img");
        recipeImgEl.src = recipe.image;
        recipeImgEl.alt = "recipe image";

        recipeItemEl.appendChild(recipeImgEl);

    

    //this elements that created..need to add to the recipeListEl
    recipeListEl.appendChild(recipeItemEl)

    })

}

//function to get info from API
async function getRecepies(){
  const response = await fetch (`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

  const data = await response.json()

  return data.recipes
}

async function init(){
    const recipes =  await getRecepies()
    displayRecipes(recipes)
}

init()