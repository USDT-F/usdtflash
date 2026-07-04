(function () {
    'use strict';

    function init() {
        const btn = document.getElementById('mobileMenuBtn');
        const sidebar = document.getElementById('mobileMenu');
        if (!btn || !sidebar) { setTimeout(init, 100); return; }

        // Overlay
        let overlay = document.getElementById('sidebarOverlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'sidebarOverlay';
            document.body.appendChild(overlay);
        }

        function open() {
            sidebar.classList.add('sidebar-open');
            overlay.classList.add('sidebar-overlay-active');
            document.body.style.overflow = 'hidden';
            btn.querySelector('i').className = 'fas fa-times text-lg';
        }

        function close() {
            sidebar.classList.remove('sidebar-open');
            overlay.classList.remove('sidebar-overlay-active');
            document.body.style.overflow = '';
            btn.querySelector('i').className = 'fas fa-bars text-lg';
        }

        btn.addEventListener('click', function (e) {
            e.stopPropagation();
            sidebar.classList.contains('sidebar-open') ? close() : open();
        });

        overlay.addEventListener('click', close);

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') close();
        });

        sidebar.querySelectorAll('button').forEach(function (b) {
            b.addEventListener('click', function () { setTimeout(close, 150); });
        });

        window.toggleMobileMenu = function () {
            sidebar.classList.contains('sidebar-open') ? close() : open();
        };
    }

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();
})();
