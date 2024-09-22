# Actualización de los índices de cada licenciatura

Esta guía describe los pasos para actualizar las páginas de índice de cada licenciatura, incluyendo la adición de un nuevo carrusel de imágenes.

## Pasos

### 1. Actualizar CSS
- Incorporar la última versión de `OfertaEducativa.css`
- Actualizar el código para incluir los estilos del nuevo carrusel

### 2. Añadir HTML del carrusel
Insertar el siguiente bloque de código debajo de la sección nav en cada índice de licenciatura:

```html
                    <div id="slider-container" class="slider-container">
						<div id="slider" class="slider">
							<!-- Las imágenes se cargarán aquí dinámicamente -->
						</div>
						<button id="prevBtn" class="slider-btn prev-btn">&lt;</button>
						<button id="nextBtn" class="slider-btn next-btn">&gt;</button>
					</div>
```

### 3. Importar archivo JavaScript
Añadir la siguiente línea para importar la funcionalidad del carrusel:

```html
<script type="text/javascript" src="galeria.js"></script>
```

### 4. Crear `galeria.js`
Crear un nuevo archivo llamado `galeria.js` en el directorio raíz de cada licenciatura.

### 5. Crear carpeta `galeria`
Crear una nueva carpeta llamada `galeria` en el directorio de cada licenciatura.

Ejemplo de la estructura:
![Estructura de carpetas](https://github.com/user-attachments/assets/6f45028c-2f70-45ee-af56-c05e6fca74dc)

### 6. Añadir código JavaScript
Agregar el siguiente código en `galeria.js`:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    let interval;
/*
src para la imagenes y caption para la descripcion de ellas
*/
    const imagenesData = [
        {
            src: "galeria/img1.jpg",
            caption: "Imagen del Equipo de computo"
        },
        {
            src: "galeria/img2.jpg",
            caption: "Imagen de alumnos"
        },
        {
			src: "galeria/img3.jpg",
			caption: "Imagen de una Obra"
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
    
```

Este código configura un carrusel de imágenes con funcionalidad de reproducción automática y botones de navegación.

## Nota
Asegúrese de que todos los archivos estén en sus ubicaciones correctas y que todas las rutas en el código HTML y JavaScript sean precisas para la estructura de su proyecto.
