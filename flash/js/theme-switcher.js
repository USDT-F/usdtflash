// Theme Switcher - Integrated with Settings Menu Only
// No floating button - theme toggle is now in Settings dropdown

(function() {
    'use strict';
    
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initThemeSystem);
    } else {
        initThemeSystem();
    }
    
    function initThemeSystem() {
        // Check saved mode and apply immediately on page load
        const savedMode = localStorage.getItem('lightMode');
        if (savedMode === 'enabled') {
            document.body.classList.add('light-mode');
            applyLightMode(true);
        }
    }
    
    // Make applyLightMode available globally for the Settings button
    window.applyLightMode = function(enable) {
        if (enable) {
            document.body.classList.add('light-mode');
            
            // Apply to hero section
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.backgroundImage = "url('nouveu/58da2440-49ad-4527-a213-a840c67e1196.png')";
                heroSection.style.backgroundSize = 'contain';
                heroSection.style.backgroundPosition = 'center';
                heroSection.style.backgroundRepeat = 'no-repeat';
                heroSection.style.backgroundColor = '#ffffff';
                
                const heroContent = heroSection.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.background = 'transparent';
                }
                
                const heroImage = heroSection.querySelector('.hero-image');
                if (heroImage) {
                    heroImage.style.display = 'none';
                }
            }
            
            // Apply to header - WHITE BACKGROUND
            const header = document.querySelector('header, .header');
            if (header) {
                header.removeAttribute('style');
                header.style.setProperty('background-image', 'none', 'important');
                header.style.setProperty('background', '#FFFFFF', 'important');
                header.style.setProperty('background-color', '#FFFFFF', 'important');
                header.style.setProperty('backdrop-filter', 'none', 'important');
                header.style.setProperty('box-shadow', '0 2px 10px rgba(0, 0, 0, 0.1)', 'important');
                header.style.setProperty('border-bottom', '1px solid rgba(0, 0, 0, 0.1)', 'important');
                
                const headerTexts = header.querySelectorAll('h1, h2, h3, p, span, a, button');
                headerTexts.forEach(el => {
                    el.style.color = '#1f2937';
                    el.style.textShadow = '0 1px 2px rgba(255,255,255,0.5)';
                });
                
                const headerIcons = header.querySelectorAll('i');
                headerIcons.forEach(icon => {
                    icon.style.color = '#374151';
                });
            }
            
            // Apply to sections and footer
            const sections = document.querySelectorAll('section:not(.hero-section), footer');
            sections.forEach(section => {
                section.style.backgroundImage = "url('nouveu/35df9015-905c-4315-8b41-25916155f3b0.png')";
                section.style.backgroundSize = 'cover';
                section.style.backgroundPosition = 'center';
                section.style.backgroundRepeat = 'no-repeat';
                
                const texts = section.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, li, div');
                texts.forEach(el => {
                    if (!el.classList.contains('bg-gradient-to-r') && !el.style.background) {
                        el.style.color = '#1f2937';
                    }
                });
                
                const icons = section.querySelectorAll('i');
                icons.forEach(icon => {
                    icon.style.color = '#374151';
                });
            });
            
            // Remove dark overlays
            const overlays = document.querySelectorAll('.absolute.inset-0.bg-black\\/60, .absolute.inset-0.bg-black\\/70');
            overlays.forEach(overlay => {
                overlay.style.display = 'none';
            });
            
        } else {
            document.body.classList.remove('light-mode');
            
            // Reset hero section
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.backgroundImage = '';
                heroSection.style.backgroundColor = '';
                heroSection.style.backgroundSize = '';
                
                const heroContent = heroSection.querySelector('.hero-content');
                if (heroContent) {
                    heroContent.style.background = '';
                }
                
                const heroImage = heroSection.querySelector('.hero-image');
                if (heroImage) {
                    heroImage.style.display = '';
                }
            }
            
            // Reset header
            const header = document.querySelector('header, .header');
            if (header) {
                header.style.backgroundImage = '';
                header.style.backgroundColor = '';
                header.style.boxShadow = '';
                header.style.borderBottom = '';
                
                const headerTexts = header.querySelectorAll('h1, h2, h3, p, span, a, button');
                headerTexts.forEach(el => {
                    el.style.color = '';
                    el.style.textShadow = '';
                });
                
                const headerIcons = header.querySelectorAll('i');
                headerIcons.forEach(icon => {
                    icon.style.color = '';
                });
            }
            
            // Reset sections and footer
            const sections = document.querySelectorAll('section:not(.hero-section), footer');
            sections.forEach(section => {
                section.style.backgroundImage = '';
                
                const texts = section.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, li, div');
                texts.forEach(el => {
                    el.style.color = '';
                });
                
                const icons = section.querySelectorAll('i');
                icons.forEach(icon => {
                    icon.style.color = '';
                });
            });
            
            // Show dark overlays
            const overlays = document.querySelectorAll('.absolute.inset-0.bg-black\\/60, .absolute.inset-0.bg-black\\/70');
            overlays.forEach(overlay => {
                overlay.style.display = '';
            });
        }
    };
})();
