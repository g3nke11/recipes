document.addEventListener('DOMContentLoaded', function () {

    const selectedElement = document.getElementById('theme');

    selectedElement.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue == 'dark') {
            document.body.classList.add('dark');
            logoImage = document.getElementById('imageChange')
            logoImage.src = '../mission/images/byui-logo_dark.png'
        } else {
            document.body.classList.remove('dark');
            logoImage = document.getElementById('imageChange')
            logoImage.src = '../mission/images/byui-logo_blue.webp'
        }
    });
});