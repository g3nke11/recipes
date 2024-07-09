export function coverTemplate(book) {
    return `<img src="${book.cover}" alt="${book.title}"
    class="home_selection">`;
}

export function recommendationTemplate(book, count) {
    return `<img src="${book.cover}" alt="${book.title}"
    id="fiction${count}">
    ${book.description}`;
}