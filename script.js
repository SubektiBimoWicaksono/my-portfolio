document.addEventListener('DOMContentLoaded', () => {

    // === Interactive Cursor Spotlight Effect ===
    const spotlight = document.getElementById('cursor-spotlight');
    
    if (spotlight) {
        window.addEventListener('mousemove', (e) => {
            requestAnimationFrame(() => {
                const x = e.clientX - spotlight.offsetWidth / 2;
                const y = e.clientY - spotlight.offsetHeight / 2;
                spotlight.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // === Scroll Indicator Update Function ===
    function updateScrollIndicator() {
        const scrollIndicator = document.getElementById('scrollIndicator');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        if(scrollIndicator) {
            scrollIndicator.style.width = scrollPercent + '%';
        }
    }

    // === Smooth Scrolling for Navigation Links ===
    function smoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // === Animate Elements on Scroll using Intersection Observer ===
    // This is more performant than listening to the scroll event
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.observe(element);
    });


    // === Event Listeners ===
    window.addEventListener('scroll', () => {
        updateScrollIndicator();
    });

    // Initialize all interactive functions
    smoothScroll();

});