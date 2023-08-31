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