const recipes = [
  {
      title: "Delicious Pasta",
      image: "https://via.placeholder.com/300x200",
      description: "A mouthwatering pasta recipe that will leave you craving for more.",
      ingredients: ["Pasta", "Tomatoes", "Basil", "Garlic", "Olive Oil"],
      instruction: "Boil the pasta. Saute tomatoes, basil, and garlic in olive oil. Mix with pasta. Serve hot.",
  },
  // Add more recipe objects here...
];

const recipeCardContainer = document.getElementById("recipe-card");

function generateRecipeCard(recipe) {
  const recipeCard = document.createElement("div");
  recipeCard.className = "recipe-card";

  const image = document.createElement("img");
  image.src = recipe.image;
  image.alt = recipe.title;
  recipeCard.appendChild(image);

  const title = document.createElement("h2");
  title.className = "recipe-title";
  title.textContent = recipe.title;
  recipeCard.appendChild(title);

  const description = document.createElement("p");
  description.className = "recipe-description";
  description.textContent = recipe.description;
  recipeCard.appendChild(description);

  const ingredients = document.createElement("ul");
  ingredients.className = "recipe-ingredients";
  recipe.ingredients.forEach(ingredient => {
      const listItem = document.createElement("li");
      listItem.textContent = ingredient;
      ingredients.appendChild(listItem);
  });
  recipeCard.appendChild(ingredients);

  const instruction = document.createElement("p");
  instruction.className = "recipe-instruction";
  instruction.textContent = recipe.instruction;
  recipeCard.appendChild(instruction);

  return recipeCard;
}

recipes.forEach(recipe => {
  const recipeCard = generateRecipeCard(recipe);
  recipeCardContainer.appendChild(recipeCard);
});