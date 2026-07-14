// Light Mode Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Create toggle button
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'lightModeToggle';
    toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    toggleBtn.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(45deg, #26a17b, #1a8462);
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        z-index: 99999;
        box-shadow: 0 4px 15px rgba(38, 161, 123, 0.4);
        transition: all 0.3s ease;
    `;
    
    document.body.appendChild(toggleBtn);
    
    // Check saved mode
    const savedMode = localStorage.getItem('lightMode');
    if (savedMode === 'enabled') {
        document.body.classList.add('light-mode');
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    // Toggle function
    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        if (document.body.classList.contains('light-mode')) {
            toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('lightMode', 'enabled');
        } else {
            toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('lightMode', 'disabled');
        }
    });
    
    // Hover effect
    toggleBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    toggleBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
