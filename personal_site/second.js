import { recommendationTemplate1, recommendationTemplate2 } from "./templates.js";
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

// Add recommendations
function renderRecommendations(bookList) {
    const contentContainer = document.querySelector('.recommendations_content');
    contentContainer.innerHTML = '';

    let count = 1
    bookList.forEach(book => {
        let contentHTML;
        if (count % 2 == 0) {
            contentHTML = recommendationTemplate2(book);
        }
        else {
            contentHTML = recommendationTemplate1(book);
        }
        console.log("renderRecipes: ", book);
        contentContainer.insertAdjacentHTML("beforeend", contentHTML);
        count++;
    })
}

function recommendationContent() {
    let bookList = getUniqueRandomBooks(books, 3)
    renderRecommendations(bookList);
}

document.addEventListener('DOMContentLoaded', function() {
    recommendationContent();
});


function filter(query) {
    const filtered = books.filter(book => {
        return book.title.toLowerCase().includes(query) ||
                book.description.toLowerCase().includes(query) ||
                book.tags.some(tag => tag.toLowerCase().includes(query));
    });
    console.log(filtered);
    const sorted = filtered.sort((a, b) => a.title.localeCompare(b.title));
    console.log(sorted);
    return sorted;
}

function searchHandler(e) {
    // e.preventDafult();
    const searchTerm = e.target.value.toLowerCase();
    const filterBooks = filter(searchTerm);
    renderRecommendations(filterBooks);
    console.log("handler done");
}

document.querySelector('#search-bar').addEventListener('search', searchHandler);