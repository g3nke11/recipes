import { coverTemplate, recommendationTemplate } from "./templates.js";
import books from './books.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum]
}

// Add covers to index.html
function getUniqueRandomBooks(list, count) {
    const result = [];
    const usedIndexes = new Set();
    
    while (result.length < count) {
        const randomBook = getRandomListEntry(list);
        const randomIndex = list.indexOf(randomBook);
        
        if (!usedIndexes.has(randomIndex)) {
            result.push(randomBook);
            usedIndexes.add(randomIndex);
        }
    }
    
    return result;
}

function renderCovers(bookList) {
    const coverContainer = document.querySelector('.selection');
    coverContainer.innerHTML = '';

    bookList.forEach(book => {
        const coverHTML = coverTemplate(book);
        console.log("renderCovers: ", book);
        coverContainer.insertAdjacentHTML("beforeend", coverHTML);
    });
}

function indexCovers() {
    const bookList = getUniqueRandomBooks(books, 5);
    renderCovers(bookList);
}

document.addEventListener('DOMContentLoaded', function() {
    indexCovers();
});

// Add recommendations
function renderRecommendations(bookList) {
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    bookList.forEach(book => {
        const coverHTML = recommendationTemplate(book);
        console.log("renderRecipes: ", book);
        coverContainer.insertAdjacentHTML("beforeend", coverHTML);
    })
}

function recommendationContent() {
    let bookList = getRandomListEntry(books);
    bookList.push(getRandomListEntry(books));
    bookList.push(getRandomListEntry(books));
    bookList.push(getRandomListEntry(books));
    bookList.push(getRandomListEntry(books));
    renderRecommendations(bookList);
}

document.addEventListener('DOMContentLoaded', function() {
    recommendationContent();
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