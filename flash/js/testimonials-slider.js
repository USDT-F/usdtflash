document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('testimonialsGrid');
    if (!grid) return;

    const userReviews = JSON.parse(localStorage.getItem('user_reviews') || '[]');

    function initials(name) {
        return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2) || name[0].toUpperCase();
    }

    const colorClasses = [
        'bg-emerald-500/20 text-emerald-400',
        'bg-blue-500/20 text-blue-400',
        'bg-purple-500/20 text-purple-400',
        'bg-amber-500/20 text-amber-400',
        'bg-pink-500/20 text-pink-400',
        'bg-cyan-500/20 text-cyan-400',
        'bg-rose-500/20 text-rose-400',
        'bg-lime-500/20 text-lime-400'
    ];

    let colorIdx = 4;

    userReviews.forEach(function(r) {
        const stars = Array(r.rating).fill('<i class="fas fa-star"></i>').join('') +
            (r.rating < 5 ? Array(5 - r.rating).fill('<i class="fas fa-star text-gray-600"></i>').join('') : '');
        const cls = colorClasses[colorIdx % colorClasses.length];
        colorIdx++;

        const div = document.createElement('div');
        div.className = 'bg-white/[0.03] border border-white/[0.06] rounded-xl p-6';
        div.innerHTML =
            '<div class="flex items-center gap-3 mb-4">' +
                '<div class="w-10 h-10 rounded-full ' + cls + ' flex items-center justify-center text-sm font-bold shrink-0">' + initials(r.name) + '</div>' +
                '<div>' +
                    '<div class="text-white text-sm font-semibold">' + r.name + '</div>' +
                    '<div class="text-gray-500 text-xs">' + r.date + '</div>' +
                '</div>' +
                '<div class="ml-auto flex text-yellow-400 text-[10px] gap-0.5">' + stars + '</div>' +
            '</div>' +
            '<p class="text-gray-400 text-sm leading-relaxed">"' + r.text + '"</p>';
        grid.appendChild(div);
    });
});
