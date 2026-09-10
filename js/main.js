document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Lucide Icons
    lucide.createIcons();

    // 2. Inicializar AOS (Animate On Scroll)
    AOS.init({
        duration: 800, // Duração da animação em ms
        once: true,    // Animar apenas uma vez ao rolar
        offset: 100,   // Offset (em px) para disparar a animação
        easing: 'ease-out-cubic',
    });

    // 3. Lógica do FAQ (Accordion)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        
        questionBtn.addEventListener('click', () => {
            // Verifica se o item atual já está ativo
            const isActive = item.classList.contains('active');
            
            // Fecha todos os outros (Opcional: remove se quiser que múltiplos fiquem abertos)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Se não estava ativo, abre
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // 4. Smooth Scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
