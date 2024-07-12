// Animação suave ao clicar em links de navegação interna
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Ativar efeitos de scroll ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Exemplo de galeria de imagens com lightbox (pode ser expandido)
const images = document.querySelectorAll('.gallery-img');
images.forEach(image => {
    image.addEventListener('click', function() {
        const imgUrl = this.getAttribute('src');
        const imgAlt = this.getAttribute('alt');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        const img = document.createElement('img');
        img.src = imgUrl;
        img.alt = imgAlt;

        const closeBtn = document.createElement('span');
        closeBtn.classList.add('close-btn');
        closeBtn.innerHTML = '&times;';

        imgContainer.appendChild(img);
        imgContainer.appendChild(closeBtn);

        overlay.appendChild(imgContainer);
        document.body.appendChild(overlay);

        closeBtn.addEventListener('click', function() {
            overlay.remove();
        });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                overlay.remove();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                overlay.remove();
            }
        });
    });
});
