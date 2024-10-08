document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('[name="race"]');
    let currentImageIndex = 0;

    // Функция для отображения картинки
    function updateImage(index) {
        const oldImg = document.getElementById('container_img1').firstChild;
        if (oldImg) {
            oldImg.remove();
        }
        const imgElement = document.createElement('img');
        imgElement.src = `images/race/${images[index].value}.jpg`;
        imgElement.width = 250;
        imgElement.height = 250;
        imgElement.style.borderRadius = '16px';
        container_img1.appendChild(imgElement);
    }

    // Обработка событий для кнопок
    images.forEach((button, index) => {
        button.addEventListener('change', () => {
            if (button.checked) {
                currentImageIndex = index;
                updateImage(currentImageIndex);
            }
        });
    });

    // Инициализация изображения
    updateImage(currentImageIndex);
});