/**
 * Main JavaScript for Luxe Aesthetics Theme
 */

(function() {
    'use strict';

    // Initialize Lucide icons
    function initLucideIcons() {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Header scroll effect
    function initHeaderScroll() {
        const header = document.getElementById('masthead');
        if (!header) return;

        function updateHeader() {
            const scrolled = window.scrollY > 50;
            header.setAttribute('data-scrolled', scrolled);
            
            // Update button class
            const ctaButton = header.querySelector('.header-cta');
            if (ctaButton) {
                if (scrolled) {
                    ctaButton.classList.add('btn-primary');
                    ctaButton.classList.remove('bg-white', 'text-primary', 'hover:bg-white/90');
                } else {
                    ctaButton.classList.remove('btn-primary');
                    ctaButton.classList.add('bg-white', 'text-primary', 'hover:bg-white/90');
                }
            }
        }

        window.addEventListener('scroll', updateHeader, { passive: true });
        updateHeader(); // Initial check
    }

    // Mobile menu toggle
    function initMobileMenu() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileMenu = document.querySelector('.mobile-menu');
        const menuIcon = menuToggle?.querySelector('.menu-icon');
        const closeIcon = menuToggle?.querySelector('.close-icon');

        if (!menuToggle || !mobileMenu) return;

        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('active');
            
            if (menuIcon && closeIcon) {
                menuIcon.classList.toggle('hidden');
                closeIcon.classList.toggle('hidden');
            }
        });
    }

    // Intersection Observer for scroll animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    
                    // Add is-visible class to all reveal elements
                    const revealElements = element.querySelectorAll(
                        '.reveal-cinematic, .reveal-headline, .reveal-text, .reveal-card, .reveal-image'
                    );
                    
                    revealElements.forEach(el => {
                        el.classList.add('is-visible');
                    });
                    
                    // Optionally unobserve after animation
                    // observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all sections with data-animate attribute
        const animatedSections = document.querySelectorAll('[data-animate]');
        animatedSections.forEach(section => observer.observe(section));
    }

    // FAQ accordion functionality
    function initFAQ() {
        const faqTriggers = document.querySelectorAll('.faq-trigger');
        
        faqTriggers.forEach(trigger => {
            trigger.addEventListener('click', function() {
                const faqItem = this.closest('.faq-item');
                const content = faqItem.querySelector('.faq-content');
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Close all other FAQs (optional - for accordion behavior)
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        item.classList.remove('active');
                        const otherContent = item.querySelector('.faq-content');
                        const otherTrigger = item.querySelector('.faq-trigger');
                        if (otherContent) otherContent.classList.add('hidden');
                        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                    }
                });
                
                // Toggle current FAQ
                this.setAttribute('aria-expanded', !isExpanded);
                faqItem.classList.toggle('active');
                
                if (content) {
                    content.classList.toggle('hidden');
                }
            });
        });
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const headerHeight = document.getElementById('masthead')?.offsetHeight || 0;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Parallax effect for background elements
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax-bg');
        
        function updateParallax() {
            parallaxElements.forEach(element => {
                const section = element.closest('section');
                if (!section) return;
                
                const rect = section.getBoundingClientRect();
                const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
                const parallaxY = scrollProgress * 50;
                
                element.style.transform = `translateY(${parallaxY * 0.3}px)`;
            });
        }
        
        if (parallaxElements.length > 0) {
            window.addEventListener('scroll', updateParallax, { passive: true });
            updateParallax(); // Initial position
        }
    }

    // Initialize everything when DOM is ready
    function init() {
        initLucideIcons();
        initHeaderScroll();
        initMobileMenu();
        initScrollAnimations();
        initFAQ();
        initSmoothScroll();
        initParallax();
    }

    // Run init when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Re-initialize Lucide icons after dynamic content changes
    document.addEventListener('wp-body-open', function() {
        setTimeout(initLucideIcons, 100);
    });

})();
