document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let interval;
    const imagenesData = {
        "imagenes": [
            "galeria/conferencia.jpeg",
            "galeria/deportes.jpeg",
            "galeria/junta.jpeg",
            "galeria/maquina.jpeg",
            "galeria/planos.jpeg",
            "galeria/puentes.jpeg",
        ]
    };
    imagenesData.imagenes.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        slider.appendChild(img);
    });
    function showSlide(index) {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slider.children.length;
        showSlide(currentIndex);
    }
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
        showSlide(currentIndex);
    }
    function startAutoSlide() {
        interval = setInterval(nextSlide, 3000);
    }
    function stopAutoSlide() {
        clearInterval(interval);
    }
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);
    startAutoSlide();
});