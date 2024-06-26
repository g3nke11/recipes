import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum]
}

function tagsTemplate(tags) {
    let html = ``
    tags.forEach(tag => {
        html += `<li>${tag}</li>`
    });
    console.log(html)
    return html;
}

function ratingTemplate(rating) {
    let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 starts
    >`
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`
        }
        else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`
        }
    }

    html += `</span>`
    return html
}

function recipeTemplate(recipe) {
	return `
    <figure class="recipe">
	    <img class="recipe-img" src=${recipe.image} alt=${recipe.name} />
	    <figcaption>
	    	<ul class="recipe__tags">
	    		${tagsTemplate(recipe.tags)}
	    	</ul>
	    	<h2><a href="#">${recipe.name}</a></h2>
	    	<p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}			
	    	</p>
	    	<p class="recipe__description">
	    		${recipe.description}
	    	</p>
        </figcaption>
    </figure>
    `;
}

function renderRecipes(recipeList) {
    const recipeContainer = document.querySelector('.recipe-container');
    recipeContainer.innerHTML = '';

    recipeList.forEach(recipe => {
        const recipeHTML = recipeTemplate(recipe);
        console.log("renderRecipes: ",recipe)
        recipeContainer.insertAdjacentHTML("beforeend", recipeHTML);
    })
}

function init() {
    const recipe = getRandomListEntry(recipes);
    console.log(recipe);
    renderRecipes([recipe]);
}

document.addEventListener('DOMContentLoaded', function() {
    init();
});

function filter(query) {
    const filtered = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(query));
    });
    console.log(filtered);
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
    console.log(sorted);
    return sorted;
}

function searchHandler(e) {
    // e.preventDafult();
    const searchTerm = e.target.value.toLowerCase();
    const filterRecipes = filter(searchTerm);
    renderRecipes(filterRecipes);
    console.log("handler done");
}

document.querySelector('#search-bar').addEventListener('search', searchHandler);