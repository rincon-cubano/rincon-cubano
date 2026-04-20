// Transición suave entre páginas para Rincón Cubano
document.addEventListener('DOMContentLoaded', function() {
    // Aplicar fade-in al cargar la página
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
    
    setTimeout(function() {
        document.body.style.opacity = '1';
    }, 50);
    
    // Interceptar clics en enlaces internos para transición suave
    const links = document.querySelectorAll('a[href^="index.html"], a[href^="noticias"], a[href^="politik"], a[href^="recetas"], a[href="../"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar enlaces externos, anclas (#) o enlaces vacíos
            if (!href || href === '#' || href.startsWith('http') || href.startsWith('//')) {
                return;
            }
            
            e.preventDefault();
            
            // Añadir clase de fade-out
            document.body.classList.add('page-transition');
            
            // Navegar después de la animación
            setTimeout(function() {
                window.location.href = href;
            }, 250);
        });
    });
});
