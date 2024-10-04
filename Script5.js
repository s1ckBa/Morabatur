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
            jan: '<b>Дарует навыки:</b><br><ul><li>Тяжелые доспехи;</li> <li>двуручное оружие;</li> <li>изменение</li></ul>',
            febr: '<b>Дарует навыки:</b> <br><ul><li>Древковое оружие;</li> <li>инженерия;</li> <li>скрытность</li></ul>',
            march: '<b>Дарует навыки:</b> <br><ul><li>Рукопашный бой;</li> <li>одноручное оружие;</li> <li>легкие доспехи</li></ul>',
            apr: '<b>Дарует навыки:</b> <br><ul><li>Алхимия;</li> <li>стрельба из арбалета;</li> <li>верховая езда</li></ul>',
            may: '<b>Дарует навыки:</b> <br><ul><li>Красноречие;</li><li>торговля;</li> <li>магия хаоса</li></ul>',
            jun: '<b>Дарует навыки:</b> <br><ul><li>Метательное оружие;</li> <li>легкие доспехи; </li><li>изменение</li></ul>',
            jul: '<b>Дарует навыки:</b> <br><ul><li>Магия хаоса;</li><li>зачарование;</li><li>красноречие</li></ul>',
            aug: '<b>Дарует навыки:</b> <br><ul><li>Стрельба из лука;</li><li>иллюзия;</li><li>мистицизм</li></ul>',
            sept: '<b>Дарует навыки:</b> <br><ul><li>Верховая езда;</li> <li>скрытность;</li> <li>короткие клинки</li></ul>',
            oct: '<b>Дарует навыки:</b> <br><ul><li>Некромантия;</li> <li>блокирование;</li> <li>тяжелые доспехи</li></ul>',
            nov: '<b>Дарует навыки:</b> <br><ul><li>Магия восстановления;</li> <li>карманные кражи;</li> <li>выносливость</li></ul>',
            dec: '<b>Дарует навыки:</b> <br><ul><li>Шаманизм;</li> <li>взлом;</li> <li>атлетика</li></ul>'
        };
        textContainer.innerHTML = texts[selectedTextId];
    }

    // Инициализация
    updateTextContainer('jan');
});
