import { coverTemplate } from "./templates.js";
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