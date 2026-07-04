// تحسين سرعة استجابة النقر على الباقات
document.addEventListener('DOMContentLoaded', function() {
    const packageCards = document.querySelectorAll('.pricing-card, .package-card');
    
    packageCards.forEach(card => {
        // إضافة تأثير فوري عند النقر
        card.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(-4px) scale(1.01)';
        });
        
        card.addEventListener('mouseup', function() {
            this.style.transform = '';
        });
        
        // تحسين للأجهزة اللمسية
        card.addEventListener('touchstart', function(e) {
            this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        card.addEventListener('touchend', function() {
            this.style.transform = '';
            // تنفيذ الانتقال بعد التأثير
            setTimeout(() => {
                const onclick = this.getAttribute('onclick');
                if (onclick) {
                    eval(onclick);
                }
            }, 100);
        });
        
        // تحسين الأزرار داخل البطاقات
        const buttons = card.querySelectorAll('button');
        buttons.forEach(btn => {
            btn.addEventListener('mousedown', function(e) {
                e.stopPropagation();
                this.style.transform = 'translateY(0) scale(0.95)';
            });
            
            btn.addEventListener('mouseup', function(e) {
                e.stopPropagation();
                this.style.transform = '';
            });
        });
    });
    
    // تحسين سرعة الانتقال بعد النقر (لا نعيد تعريف الدالة الأصلية)
    const origHandle = window.handlePackageClick;
    window.handlePackageClick = function(url) {
        // تأثير بصري فوري على البطاقة المستهدفة
        const cards = document.querySelectorAll('.pricing-card');
        cards.forEach(c => c.style.transform = 'scale(0.95)');
        
        // استدعاء الدالة الأصلية للتحقق من التسجيل
        if (typeof origHandle === 'function') {
            origHandle(url);
        } else {
            setTimeout(() => { window.location.href = url; }, 100);
        }
    };
});
