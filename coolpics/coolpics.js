function handleResize() {
    const menu = document.querySelector("#menu");
    const menuButton = document.querySelector("#menu-button");
    if (window.innerWidth > 900) {
        menu.classList.remove("hide");
        menuButton.classList.add("hide");
        console.log('first');
    } else {
        menu.classList.add("hide");
        menuButton.classList.remove("hide");
        console.log('second');
    }
};

// handleResize();
window.addEventListener("resize", handleResize);

const menuButton = document.querySelector("#menu-button");
function toggleMenu() {
    const menu = document.querySelector("#menu");
    menu.classList.toggle('hide');
    console.log('toggle');
}

menuButton.addEventListener("click", toggleMenu);

function viewerTemplate (pic, alt) {
    return    `<div class="viewer"> 
                    <span class="close-viewer">X</span> <img src="${pic}" alt="${alt}"> 
                    </div>`;
};

function viewHandler(event) {
    var targetPic = event.target;
    console.log(targetPic)

    var picSrc = targetPic.src;
    var picAlt = targetPic.alt;
    console.log(picSrc)

    var srcSplit = picSrc.split('-');

    var firstPart = srcSplit[0];
    var newSrc = firstPart + "-full.jpeg";

    var htmltoinsert = viewerTemplate(newSrc, picAlt);

    document.body.insertAdjacentHTML('afterbegin', htmltoinsert);

    var closeButton = document.querySelector(".close-viewer");

    closeButton.addEventListener("click", closeViewer);

};

function closeViewer() {
    var viewer = document.querySelector('.viewer');
    viewer.remove();

};

// Get all the <img> elements
var pictures = document.querySelectorAll("img");

// Attach the viewHandler function to each <img> element
pictures.forEach(function(picture) {
    picture.addEventListener("click", viewHandler);
});
