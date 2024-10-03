document.addEventListener('DOMContentLoaded', () => {
    const monthSelect = document.my.month;
    const selection = document.getElementById("selection");

    function changeOption() {
        const selectedOption = 
        {
            jan: 'Дарует навыки: Тяжелые доспехи; двуручное оружие; изменение',
            feb: 'sda',
            mar: 'czv',
            apr: 'czvs',
            may: 'dav',
            jun: 'adsf',
            jul: 'sadv',
            aug: 'zx',
            sep: 'jrt',
            oct: 'hrt',
            nov: 'mfg',
            dec: 'qwerty'
        }
        selection.textContent = text[selectedOption];
    }
    monthSelect.addEventListener("change", changeOption);

    updateTextContainer('jan');
});