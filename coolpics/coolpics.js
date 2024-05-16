// function handleResize() {
//     const menu = document.querySelector("Menu");
//     if (window.innerWidth > 1000) {
//         menu.classList.remove("hide");
//     } else {
//         menu.classList.add("hide");
//     }
// };

// handleResize();
// window.addEventListener("resize", handleResize);

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
