function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let userInput = document.querySelector("#user-input");

  let apiKey = "93ffacd3347f947bo5021d6t7b18ceab";
  let prompt = `User instructions are: Generate a short and easy dessert recipe with no more than four ingredients and no more than six lines of instruction and is from ${userInput.value}`;
  let context =
    "You are a cuisine expert that has travelled all over the world. You know the best recipe for each country. Please generate only one simple recipe. Only provide recipe in basic html format. Please make title an <h2>. Please include `by Pâtisserie Perry` inside <em> element after the recipe title on a seperate line. Make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Generating the best dessert recipe from ${userInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
