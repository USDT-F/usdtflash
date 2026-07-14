// Dynamic Page Title Based on Language
(function() {
    'use strict';

    const pageTitles = {
        en: 'USDT-FLASH | Official Tether Partner - Secure USDT Transactions',
        ar: 'USDT-FLASH | شريك تيثر الرسمي - معاملات USDT آمنة',
        fr: 'USDT-FLASH | Partenaire Officiel Tether - Transactions USDT Sécurisées',
        hi: 'USDT-FLASH | आधिकारिक टीथर पार्टनर - सुरक्षित USDT लेनदेन',
        ja: 'USDT-FLASH | 公式テザーパートナー - 安全なUSDT取引',
        ru: 'USDT-FLASH | Официальный партнер Tether - Безопасные транзакции USDT'
    };

    // Function to update page title
    window.updatePageTitle = function(lang) {
        if (pageTitles[lang]) {
            document.title = pageTitles[lang];
        }
    };

    // Detect browser language on load
    const browserLang = navigator.language.split('-')[0];
    if (pageTitles[browserLang]) {
        updatePageTitle(browserLang);
    }
})();
