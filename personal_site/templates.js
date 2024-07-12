export function coverTemplate(book) {
    return `<img src="${book.cover}" alt="${book.title}"
    class="home_selection">`;
}

export function recommendationTemplate1(book) {
    return `<img src="${book.cover}" alt="${book.title}"
    class="recommendation-img">
    <div class='recommendation-content'
    ${book.description}</div>`;
}

export function recommendationTemplate2(book) {
    return `<div class='recommendation-content'
    ${book.description}</div>
    <img src="${book.cover}" alt="${book.title}" class="recommendation-img">`;
}