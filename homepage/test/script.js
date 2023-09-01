const addRecipeBtn = document.getElementById('addRecipeBtn');
const recipeForm = document.getElementById('recipeForm');
const recipeContainer = document.querySelector('.recipe-container');

addRecipeBtn.addEventListener('click', () => {
    const image = document.getElementById('image').value;
    const recipeTitle = document.getElementById('recipeTitle').value;
    const cookingTime = document.getElementById('cookingTime').value;
    const ingredients = document.getElementById('ingredients').value.split(',');
    const serves = document.getElementById('serves').value;




    const newRecipeCard = document.createElement('div');
    newRecipeCard.classList.add('recipe');
    newRecipeCard.innerHTML = `
    <div class="cont">
    <div class="anotherOne">
            <img src="${image}" alt="" class="food">
            <div class="paracont">
                <h1 class="card-title">${recipeTitle}</h1>
                <p class="par">
                    <ul id="par" class="par">
                        <li>${cookingTime}</li>
                        <li>Number of ingredients ${ingredients.length}</li>
                        <li>Serves ${serves} people</li>
                    </ul>
                </p>
                <button class="button">Try Recipe</button>
                </div>
            </div>
        </a>
        </div>
    `;

    recipeContainer.appendChild(newRecipeCard);

    recipeForm.reset();
});

const bigButton = document.querySelector("#dop");

bigButton.addEventListener("click", function(){
  window.scrollTo(0, 0);
});

const searchInput = document.getElementById('searchInput');
const recipeCards = document.querySelectorAll('.recipe');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    recipeCards.forEach(card => {
        const recipeTitle = card.textContent.toLowerCase();
        
        if (recipeTitle.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});