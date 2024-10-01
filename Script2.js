const images = document.querySelectorAll('[name="rase"]');
const imageContainer = document.querySelector('img_rase');

// Функция для обновления изображения
function updateImage() {
    let selectedIndex = parseInt(this.value);
    if (!isNaN(selectedIndex)) {
        imageContainer.src = 'images/' + selectedIndex + '.jpg';
    }
}

// Обработчик события изменения состояния радио кнопок
images.forEach((item) => item.addEventListener('change', updateImage));

// Инициализация изображения при загрузке страницы
updateImage();
