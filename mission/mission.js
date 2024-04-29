document.addEventListener('DOMContentLoaded', function () {

    const selectedElement = document.getElementById('theme');

    selectedElement.addEventListener('change', function () {
        const selectedValue = this.value;
        if (selectedValue == 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    });
});