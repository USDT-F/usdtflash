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

        // Ensure sidebar starts closed
        close();

        // Update sidebar footer button based on auth state
        function updateSidebarAuth() {
            var footer = sidebar.querySelector('.sidebar-footer');
            if (!footer) return;
            var userData = localStorage.getItem('user');
            if (userData) {
                var user = JSON.parse(userData);
                var name = user.name || user.email || 'User';
                var initial = name[0].toUpperCase();
                footer.innerHTML = '<button class="sidebar-footer-btn" onclick="window.location.href=\'pages/account-info.html\'" style="background:linear-gradient(135deg,rgba(16,185,129,0.15),rgba(16,185,129,0.05));border-color:rgba(16,185,129,0.25);">' +
                    '<div class="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">' + initial + '</div>' +
                    '<div class="flex flex-col items-start min-w-0"><span class="text-white text-sm font-semibold truncate w-full text-left">' + name + '</span><span class="text-gray-500 text-[10px]">View Account</span></div>' +
                    '</button>';
            } else {
                footer.innerHTML = '<button class="sidebar-footer-btn" onclick="window.location.href=\'pages/login.html\'">' +
                    '<i class="fas fa-sign-in-alt"></i> Login to Your Account' +
                    '</button>';
            }
        }

        updateSidebarAuth();

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

    // Re-run on storage events (login/logout from other tabs)
    window.addEventListener('storage', function () {
        var sidebar = document.getElementById('mobileMenu');
        if (sidebar) {
            var footer = sidebar.querySelector('.sidebar-footer');
            if (footer) {
                var userData = localStorage.getItem('user');
                if (userData) {
                    var user = JSON.parse(userData);
                    var name = user.name || user.email || 'User';
                    var initial = name[0].toUpperCase();
                    footer.innerHTML = '<button class="sidebar-footer-btn" onclick="window.location.href=\'pages/account-info.html\'" style="background:linear-gradient(135deg,rgba(16,185,129,0.15),rgba(16,185,129,0.05));border-color:rgba(16,185,129,0.25);">' +
                        '<div class="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">' + initial + '</div>' +
                        '<div class="flex flex-col items-start min-w-0"><span class="text-white text-sm font-semibold truncate w-full text-left">' + name + '</span><span class="text-gray-500 text-[10px]">View Account</span></div>' +
                        '</button>';
                } else {
                    footer.innerHTML = '<button class="sidebar-footer-btn" onclick="window.location.href=\'pages/login.html\'">' +
                        '<i class="fas fa-sign-in-alt"></i> Login to Your Account' +
                        '</button>';
                }
            }
        }
    });

    document.readyState === 'loading'
        ? document.addEventListener('DOMContentLoaded', init)
        : init();
})();
