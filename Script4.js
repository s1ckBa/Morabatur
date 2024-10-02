document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('[name="class"]');
    let currentImageIndex = 0;

    // ������� ��� ����������� ��������
    function updateImage(index) {
        const oldImg = document.getElementById('container_img2').firstChild;
        if (oldImg) {
            oldImg.remove();
        }
        const imgElement = document.createElement('img');
        imgElement.src = `images/class/${images[index].value}.jpg`;
        imgElement.width = 250;
        imgElement.height = 250;
        imgElement.style.borderRadius = '32px';
        container_img2.appendChild(imgElement);
    }

    // ��������� ������� ��� ������
    images.forEach((button, index) => {
        button.addEventListener('change', () => {
            if (button.checked) {
                currentImageIndex = index;
                updateImage(currentImageIndex);
            }
        });
    });

    // ������������� �����������
    updateImage(currentImageIndex);
});