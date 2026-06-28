document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.testimonials-slider');
    if (!container) return;

    const userReviews = JSON.parse(localStorage.getItem('user_reviews') || '[]');

    function initials(name) {
        return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || name[0].toUpperCase();
    }

    function colorFromName(name) {
        const colors = [
            'linear-gradient(135deg,#10b981,#059669)',
            'linear-gradient(135deg,#3b82f6,#2563eb)',
            'linear-gradient(135deg,#7c3aed,#6d28d9)',
            'linear-gradient(135deg,#f59e0b,#d97706)',
            'linear-gradient(135deg,#ec4899,#db2777)',
            'linear-gradient(135deg,#f97316,#ea580c)',
            'linear-gradient(135deg,#06b6d4,#0891b2)',
            'linear-gradient(135deg,#84cc16,#65a30d)'
        ];
        let hash = 0;
        for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
        return colors[Math.abs(hash) % colors.length];
    }

    userReviews.forEach(function(r) {
        const div = document.createElement('div');
        div.className = 'testimonial-slide';
        div.innerHTML =
            '<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">' +
                '<div class="flex items-center gap-4 mb-6">' +
                    '<div class="w-14 h-14 rounded-full flex items-center justify-center text-white text-lg font-black shrink-0" style="background:' + colorFromName(r.name) + ';box-shadow:0 8px 24px rgba(16,185,129,0.3);">' + initials(r.name) + '</div>' +
                    '<div class="flex-1 min-w-0">' +
                        '<h3 class="font-bold text-white text-lg truncate">' + r.name + '</h3>' +
                        '<div class="flex text-yellow-400 mt-1 text-sm">' +
                            Array(r.rating).fill('<i class="fas fa-star"></i>').join('') +
                            (r.rating < 5 ? Array(5 - r.rating).fill('<i class="fas fa-star text-gray-600"></i>').join('') : '') +
                        '</div>' +
                        '<div class="text-xs text-gray-400 mt-0.5"><i class="fas fa-clock mr-1"></i>' + r.date + '</div>' +
                    '</div>' +
                '</div>' +
                '<p class="text-gray-100 text-base leading-relaxed">"' + r.text + '"</p>' +
            '</div>';
        container.insertBefore(div, container.querySelector('.testimonial-slide.active'));
    });

    let slideIndex = 1;
    const slides = container.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.testimonial-dots');

    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.onclick = function() { currentSlide(i + 1); };
            dotsContainer.appendChild(dot);
        }
    }

    const prevButton = document.getElementById('prev-testimonial');
    const nextButton = document.getElementById('next-testimonial');

    if (prevButton) prevButton.addEventListener('click', function() { plusSlides(-1); });
    if (nextButton) nextButton.addEventListener('click', function() { plusSlides(1); });

    showSlides(slideIndex);
    setInterval(function() { plusSlides(1); }, 20000);

    function plusSlides(n) { showSlides(slideIndex += n); }
    function currentSlide(n) { showSlides(slideIndex = n); }

    function showSlides(n) {
        const dots = document.querySelectorAll('.dot');
        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;
        slides.forEach(function(s) { s.classList.remove('active'); });
        dots.forEach(function(d) { d.classList.remove('active'); });
        slides[slideIndex-1].classList.add('active');
        dots[slideIndex-1].classList.add('active');
    }
});