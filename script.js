document.addEventListener('DOMContentLoaded', () => {
    // --- Lógica del Menú Hamburguesa ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('nav');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // --- Lógica del Monstruo ---
    const monster = document.getElementById('monster');
    const mouth = document.getElementById('monster-mouth');
    const armL = document.getElementById('arm-l');
    const armR = document.getElementById('arm-r');

    const btnSad = document.getElementById('btn-sad');
    const btnHappy = document.getElementById('btn-happy');
    const btnColor = document.getElementById('btn-color');

    // Paleta de colores basada en el logo
    const colors = [
        '#4cc9f0', // Monster Main
        '#48cae4', // Primary
        '#0077b6', // Secondary
        '#72efdd', // Accent
        '#90e0ef', // Detail
        '#caf0f8'  // Light
    ];
    let currentColorIndex = 0;

    // 1. Evento Click en el Monstruo: Mueve los brazos
    if (monster) {
        monster.addEventListener('click', () => {
            armL.classList.add('arm-wave-left');
            armR.classList.add('arm-wave');

            // Vuelve a la posición original después de 500ms
            setTimeout(() => {
                armL.classList.remove('arm-wave-left');
                armR.classList.remove('arm-wave');
            }, 500);
        });
    }

    // 2. Evento Cambiar Expresión: Triste / Feliz
    if (btnSad) {
        btnSad.addEventListener('click', () => {
            mouth.classList.add('mouth-sad');
        });
    }

    if (btnHappy) {
        btnHappy.addEventListener('click', () => {
            mouth.classList.remove('mouth-sad');
        });
    }

    // 3. Evento Cambiar Color: Rotación de paleta del logo
    if (btnColor) {
        btnColor.addEventListener('click', () => {
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            const newColor = colors[currentColorIndex];

            // Aplicamos el color al cuerpo, brazos y piernas
            const bodyParts = document.querySelectorAll('.monster-body, .arm, .leg');
            bodyParts.forEach(part => {
                part.style.backgroundColor = newColor;
            });
        });
    }
});
