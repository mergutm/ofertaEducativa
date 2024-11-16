document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let interval;
    /*
    src para la imagenes y caption para la descripcion de ellas
    */
    const imagenesData = [{
            src: "galeria/conferencia.jpeg",
            caption: "Conferencias del día del obrero de la construcción."
        },
        {
            src: "galeria/deportes.jpeg",
            caption: "Actividades deportivas del día del obrero de la construcción."
        },
        {
            src: "galeria/junta.jpeg",
            caption: "Visita de obra, obra de alcantarillado, drenaje y pavimentación."
        },
        {
            src: "galeria/maquina.jpeg",
            caption: "Máquina Universal usada en clases de resistencia de materiales y materiales de construcción."
        },
        {
            src: "galeria/planos.jpeg",
            caption: "Exposición de planos de la materia de Dibujo asistido por computadora."
        },
        {
            src: "galeria/puentes.jpeg",
            caption: "Concurso de Diseño de puentes de madera."
        }

    ];

    imagenesData.forEach(data => {
        const slide = document.createElement('div');
        slide.className = 'slide';

        const img = document.createElement('img');
        img.src = data.src;
        slide.appendChild(img);

        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = data.caption;
        slide.appendChild(caption);

        slider.appendChild(slide);
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
        interval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
});