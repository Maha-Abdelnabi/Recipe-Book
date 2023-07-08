const API_KEY = "48daae8267bc447b96969729bab86ecb";

//function to get info from API
async function getRecepies(){
  const response = await fetch (`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`)

  const data = await response.json()

  return data.recipes
}

