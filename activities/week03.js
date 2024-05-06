let imageInput = document.getElementById('imageInput');
let imageButton = document.getElementById('imageButton');
let ourImage = document.getElementById('testImage');

imageButton.addEventListener('click', function() {
    let newImageURL = imageInput.value;
    // ourImage.src = "../mission/images/byui-logo_blue.webp"
    ourImage.src = newImageURL;
})
