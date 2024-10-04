document.addEventListener('DOMContentLoaded', () => {
    const contentTypeSelect = document.getElementById('month');
    const textContainer = document.getElementById('container_text_month');

    // Обработка событий для кнопок
    contentTypeSelect.addEventListener('change', () => {
        updateTextContainer(contentTypeSelect.value);
    });

    // Функция для обновления содержимого контейнера
    function updateTextContainer(selectedTextId) {
        const texts = {
            jan: 'Дарует навыки: Тяжелые доспехи; двуручное оружие; изменение',
            febr: 'Дарует навыки: Древковое оружие; инженерия; скрытность',
            march: 'Дарует навыки: Рукопашный бой; одноручное оружие; легкие доспехи',
            apr: 'Дарует навыки: Алхимия; стрельба из арбалета; верховая езда',
            may: 'Дарует навыки: Красноречие; торговля; магия хаоса',
            jun: 'Дарует навыки: Метательное оружие; легкие доспехи; изменение',
            jul: 'Дарует навыки: Магия хаоса; зачарование; красноречие',
            aug: 'Дарует навыки: Стрельба из лука; иллюзия; мистицизм',
            sept: 'Дарует навыки: Верховая езда; скрытность; короткие клинки',
            oct: 'Дарует навыки: Некромантия; блокирование; тяжелые доспехи',
            nov: 'Дарует навыки: Магия восстановления; карманные кражи; выносливость',
            dec: 'Дарует навыки: Шаманизм; взлом; атлетика'
        };
        textContainer.innerHTML = texts[selectedTextId];
    }

    // Инициализация
    updateTextContainer('jan');
});
