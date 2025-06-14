document.addEventListener('DOMContentLoaded', () => {
    
    AOS.init({
        duration: 800,
        once: true,
        offset: 100,
        easing: 'ease-in-out-quad',
    });

    
    const backToTopButton = document.getElementById("back-to-top");
    const stickyNav = document.querySelector('.sticky-nav');
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.sticky-nav a');

    const handleScroll = () => {
        const scrollPosition = window.pageYOffset;

        
        if (scrollPosition > 400) {
            backToTopButton.classList.add("show");
        } else {
            backToTopButton.classList.remove("show");
        }

        
        let currentSectionId = '';
        sections.forEach(section => {
            
            const sectionTop = section.offsetTop;
            if (scrollPosition >= sectionTop - stickyNav.offsetHeight - 20) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    };
    
    
    window.addEventListener("scroll", handleScroll);
});
