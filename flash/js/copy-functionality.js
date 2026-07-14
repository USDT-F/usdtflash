// Copy functionality for How It Works section
document.addEventListener('DOMContentLoaded', function() {
    // Add copy buttons to important text sections
    const sections = document.querySelectorAll('#how .text-blue-800, #how .text-green-800, #how .text-orange-800, #how .text-red-800, #how .text-purple-800');
    
    sections.forEach(section => {
        // Create copy button
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
        copyBtn.className = 'copy-btn';
        copyBtn.style.cssText = 'position: absolute; top: 10px; right: 10px; background: #26a17b; color: white; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; font-size: 14px; transition: all 0.3s;';
        
        // Make parent relative
        const parent = section.closest('div');
        if (parent) {
            parent.style.position = 'relative';
            parent.appendChild(copyBtn);
            
            // Copy functionality
            copyBtn.addEventListener('click', function() {
                const text = section.innerText;
                navigator.clipboard.writeText(text).then(() => {
                    copyBtn.innerHTML = '<i class="fas fa-check"></i>';
                    copyBtn.style.background = '#22c55e';
                    setTimeout(() => {
                        copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
                        copyBtn.style.background = '#26a17b';
                    }, 2000);
                });
            });
            
            // Hover effect
            copyBtn.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            copyBtn.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    });
});
