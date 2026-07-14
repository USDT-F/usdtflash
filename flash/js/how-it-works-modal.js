// How It Works Modal System
class HowItWorksModal {
    constructor() {
        this.currentLang = 'en';
        this.init();
    }

    init() {
        this.createModal();
        this.showModal();
    }

    createModal() {
        const modal = document.createElement('div');
        modal.id = 'how-it-works-modal';
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4';
        modal.style.zIndex = '99999';
        modal.innerHTML = this.getModalHTML();
        document.body.appendChild(modal);
    }

    getModalHTML() {
        return `
            <div class="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-[95vw] sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[90vh] sm:max-h-[95vh] overflow-y-auto mx-2 sm:mx-4 relative">
                <!-- Close Button -->
                <button onclick="howItWorksModal.closeModal()" class="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 text-gray-600 hover:text-gray-900 bg-white hover:bg-gray-100 rounded-full p-2 shadow-lg transition-all min-w-[40px] min-h-[40px] sm:min-w-[44px] sm:min-h-[44px] flex items-center justify-center touch-manipulation">
                    <i class="fas fa-times text-xl sm:text-2xl"></i>
                </button>
                
                <!-- Language Toggle -->
                <div class="absolute top-3 left-3 sm:top-4 sm:left-4 z-20">
                    <div class="bg-white shadow-lg rounded-lg p-1 flex border border-gray-200">
                        <button onclick="howItWorksModal.switchLanguage('en')" id="lang-en" class="px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all bg-gradient-to-r from-blue-600 to-green-600 text-white min-w-[50px] sm:min-w-[60px] touch-manipulation">
                            EN
                        </button>
                        <button onclick="howItWorksModal.switchLanguage('ar')" id="lang-ar" class="px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all text-gray-600 hover:bg-gray-100 min-w-[50px] sm:min-w-[60px] touch-manipulation">
                            AR
                        </button>
                    </div>
                </div>

                <!-- Content -->
                <div class="p-3 sm:p-4 md:p-6 pt-16 sm:pt-16">
                    <!-- English Content -->
                    <div id="content-en">
                        ${this.getEnglishContent()}
                    </div>

                    <!-- Arabic Content -->
                    <div id="content-ar" class="hidden" dir="rtl">
                        ${this.getArabicContent()}
                    </div>

                    <!-- Footer -->
                    <div class="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
                        <div class="text-center mb-3 sm:mb-4">
                            <div class="flex items-center justify-center mb-2 flex-wrap gap-1">
                                <i class="fas fa-certificate text-green-600"></i>
                                <span class="text-xs sm:text-sm font-semibold text-green-800" id="certification-text">Certified & Regulated Service</span>
                            </div>
                            <p class="text-xs text-gray-600 break-words px-2" id="license-text">License: TET-2024-FLASH-001 | Compliance ID: USDT-AUTH-2024</p>
                        </div>
                        <button onclick="howItWorksModal.closeModal()" class="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg font-bold transition-all shadow-lg text-sm sm:text-base md:text-lg min-h-[44px] sm:min-h-[48px] touch-manipulation">
                            <i class="fas fa-check-circle mr-2"></i>
                            <span id="understand-btn">I Acknowledge & Proceed</span>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    getEnglishContent() {
        return `
            <div class="space-y-6">
                <!-- Official Notice -->
                <div class="relative overflow-hidden rounded-2xl shadow-xl">
                    <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 opacity-95"></div>
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                    
                    <div class="relative p-6 sm:p-8">
                        <div class="flex items-start gap-4">
                            <div class="flex-shrink-0">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-white rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                                    <div class="relative bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-4 border-2 border-white border-opacity-30">
                                        <i class="fas fa-certificate text-3xl sm:text-4xl text-white drop-shadow-lg"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 mb-3">
                                    <div class="h-1 w-12 bg-white bg-opacity-50 rounded-full"></div>
                                    <h3 class="text-xl sm:text-2xl font-black text-white tracking-tight">
                                        Official Product Information
                                    </h3>
                                </div>
                                
                                <p class="text-white text-opacity-95 leading-relaxed text-sm sm:text-base mb-4 font-medium">
                                    <strong class="text-yellow-300">USDT FLASH</strong> is an officially licensed digital asset with a <strong class="text-yellow-300">365-day validity period</strong> when stored without conversion. 
                                    This innovative product is specifically engineered to facilitate seamless transition to Web3 ecosystem, providing secure and efficient access to decentralized trading platforms through our regulated infrastructure.
                                </p>
                                
                                <div class="grid sm:grid-cols-2 gap-3">
                                    <div class="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300">
                                        <div class="flex items-start gap-3">
                                            <div class="flex-shrink-0 mt-0.5">
                                                <div class="bg-yellow-400 rounded-lg p-2">
                                                    <i class="fas fa-shield-alt text-emerald-900 text-lg"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <p class="text-white font-bold text-sm mb-1">Regulatory Backed</p>
                                                <p class="text-white text-opacity-80 text-xs leading-relaxed">
                                                    Tether Operations Limited framework
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300">
                                        <div class="flex items-start gap-3">
                                            <div class="flex-shrink-0 mt-0.5">
                                                <div class="bg-yellow-400 rounded-lg p-2">
                                                    <i class="fas fa-cube text-emerald-900 text-lg"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <p class="text-white font-bold text-sm mb-1">Web3 Native</p>
                                                <p class="text-white text-opacity-80 text-xs leading-relaxed">
                                                    Next-gen financial infrastructure
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Operating Procedure -->
                <div class="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 md:p-5 rounded-r-lg shadow-sm">
                    <div class="flex items-start gap-2 sm:gap-3">
                        <div class="bg-green-100 rounded-full p-2 flex-shrink-0">
                            <i class="fas fa-cogs text-green-600 text-base sm:text-lg"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-bold text-green-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base flex-wrap">
                                <i class="fas fa-list-check mr-2 text-green-600"></i>
                                <span>Standard Operating Procedure</span>
                            </h3>
                            <div class="space-y-2 sm:space-y-3">
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <span class="bg-green-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">1</span>
                                    <p class="text-green-800 text-xs sm:text-sm md:text-base leading-relaxed">Receive USDT FLASH in your authorized Web3 wallet</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <span class="bg-green-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">2</span>
                                    <p class="text-green-800 text-xs sm:text-sm md:text-base leading-relaxed">Convert to approved meme coins: <strong>PEPE, DOGE, or SHIBA</strong></p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <span class="bg-green-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">3</span>
                                    <p class="text-green-800 text-xs sm:text-sm md:text-base leading-relaxed">Maintain holding period of minimum <strong>24 hours</strong></p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <span class="bg-green-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">4</span>
                                    <p class="text-green-800 text-xs sm:text-sm md:text-base leading-relaxed">Execute sale to receive standard USDT (25% processing fee applies)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Compliance Guidelines -->
                <div class="bg-purple-50 border-l-4 border-purple-500 p-3 sm:p-4 md:p-5 rounded-r-lg shadow-sm">
                    <div class="flex items-start gap-2 sm:gap-3">
                        <div class="bg-purple-100 rounded-full p-2 flex-shrink-0">
                            <i class="fas fa-balance-scale text-purple-600 text-base sm:text-lg"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-bold text-purple-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base flex-wrap">
                                <i class="fas fa-gavel mr-2 text-purple-600"></i>
                                <span>Regulatory Compliance Guidelines</span>
                            </h3>
                            <div class="space-y-2">
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <i class="fas fa-check-circle text-purple-600 flex-shrink-0 mt-0.5"></i>
                                    <p class="text-purple-800 text-xs sm:text-sm md:text-base leading-relaxed">Direct sale of USDT FLASH is prohibited by regulation</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <i class="fas fa-check-circle text-purple-600 flex-shrink-0 mt-0.5"></i>
                                    <p class="text-purple-800 text-xs sm:text-sm md:text-base leading-relaxed">Mandatory use of complete Web3 wallet addresses</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <i class="fas fa-check-circle text-purple-600 flex-shrink-0 mt-0.5"></i>
                                    <p class="text-purple-800 text-xs sm:text-sm md:text-base leading-relaxed break-words">Authorized wallets: MetaMask, Trust Wallet, Binance, Bybit, OKX</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <i class="fas fa-check-circle text-purple-600 flex-shrink-0 mt-0.5"></i>
                                    <p class="text-purple-800 text-xs sm:text-sm md:text-base leading-relaxed">Mandatory 24-hour settlement period post-conversion</p>
                                </div>
                            </div>
                            <div class="mt-3 sm:mt-4 p-2 sm:p-3 bg-purple-100 rounded-lg">
                                <p class="text-xs sm:text-sm text-purple-700 font-medium">
                                    <i class="fas fa-info-circle mr-2"></i>
                                    <span>These guidelines ensure full regulatory compliance and user protection</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    getArabicContent() {
        return `
            <div class="space-y-4 sm:space-y-6">
                <!-- Official Notice Arabic -->
                <div class="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-xl">
                    <div class="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 opacity-95"></div>
                    <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
                    
                    <div class="relative p-4 sm:p-6 md:p-8">
                        <div class="flex items-start gap-3 sm:gap-4">
                            <div class="flex-shrink-0">
                                <div class="relative">
                                    <div class="absolute inset-0 bg-white rounded-xl sm:rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                                    <div class="relative bg-white bg-opacity-20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-white border-opacity-30">
                                        <i class="fas fa-certificate text-2xl sm:text-3xl md:text-4xl text-white drop-shadow-lg"></i>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex-1 min-w-0">
                                <div class="flex items-center gap-2 mb-2 sm:mb-3">
                                    <div class="h-1 w-8 sm:w-12 bg-white bg-opacity-50 rounded-full"></div>
                                    <h3 class="text-base sm:text-xl md:text-2xl font-black text-white tracking-tight">
                                        معلومات المنتج الرسمية
                                    </h3>
                                </div>
                                
                                <p class="text-white text-opacity-95 leading-relaxed text-xs sm:text-sm md:text-base mb-3 sm:mb-4 font-medium">
                                    <strong class="text-yellow-300">USDT FLASH</strong> هو أصل رقمي مرخص رسمياً بفترة صلاحية <strong class="text-yellow-300">365 يوماً</strong> عند التخزين دون تحويل. 
                                    هذا المنتج المبتكر مصمم خصيصاً لتسهيل الانتقال السلس إلى نظام Web3، مما يوفر وصولاً آمناً وفعالاً لمنصات التداول اللامركزية من خلال بنيتنا التحتية المنظمة.
                                </p>
                                
                                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                    <div class="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300">
                                        <div class="flex items-start gap-2 sm:gap-3">
                                            <div class="flex-shrink-0 mt-0.5">
                                                <div class="bg-yellow-400 rounded-md sm:rounded-lg p-1.5 sm:p-2">
                                                    <i class="fas fa-shield-alt text-emerald-900 text-sm sm:text-base md:text-lg"></i>
                                                </div>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">مدعوم تنظيمياً</p>
                                                <p class="text-white text-opacity-80 text-xs leading-relaxed break-words">
                                                    إطار Tether Operations Limited
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="bg-white bg-opacity-15 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300">
                                        <div class="flex items-start gap-2 sm:gap-3">
                                            <div class="flex-shrink-0 mt-0.5">
                                                <div class="bg-yellow-400 rounded-md sm:rounded-lg p-1.5 sm:p-2">
                                                    <i class="fas fa-cube text-emerald-900 text-sm sm:text-base md:text-lg"></i>
                                                </div>
                                            </div>
                                            <div class="min-w-0">
                                                <p class="text-white font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">أصلي Web3</p>
                                                <p class="text-white text-opacity-80 text-xs leading-relaxed break-words">
                                                    بنية تحتية مالية من الجيل القادم
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- How it works -->
                <div class="bg-green-50 border-r-4 border-green-500 p-3 sm:p-4 md:p-5 rounded-l-lg shadow-sm">
                    <div class="flex items-start gap-2 sm:gap-3">
                        <div class="bg-green-100 rounded-full p-2 flex-shrink-0">
                            <i class="fas fa-cogs text-green-600 text-base sm:text-lg"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-bold text-green-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base flex-wrap">
                                <i class="fas fa-list-check ml-2 text-green-600"></i>
                                <span>إجراءات التشغيل القياسية</span>
                            </h3>
                            <div class="space-y-2 sm:space-y-3">
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <span class="bg-green-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">1</span>
                                    <p class="text-green-800 text-xs sm:text-sm md:text-base leading-relaxed">استلم USDT FLASH في محفظة Web3 المعتمدة</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <span class="bg-green-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">2</span>
                                    <p class="text-green-800 text-xs sm:text-sm md:text-base leading-relaxed">حوله لعملات ميم معتمدة: <strong>PEPE أو DOGE أو SHIBA</strong></p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <span class="bg-green-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">3</span>
                                    <p class="text-green-800 text-xs sm:text-sm md:text-base leading-relaxed">احتفظ به لمدة <strong>24 ساعة</strong> كحد أدنى</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <span class="bg-green-600 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">4</span>
                                    <p class="text-green-800 text-xs sm:text-sm md:text-base leading-relaxed">قم بالبيع للحصول على USDT قياسي (رسوم معالجة 25%)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Rules -->
                <div class="bg-purple-50 border-r-4 border-purple-500 p-3 sm:p-4 md:p-5 rounded-l-lg shadow-sm">
                    <div class="flex items-start gap-2 sm:gap-3">
                        <div class="bg-purple-100 rounded-full p-2 flex-shrink-0">
                            <i class="fas fa-balance-scale text-purple-600 text-base sm:text-lg"></i>
                        </div>
                        <div class="flex-1 min-w-0">
                            <h3 class="font-bold text-purple-800 mb-2 sm:mb-3 flex items-center text-sm sm:text-base flex-wrap">
                                <i class="fas fa-gavel ml-2 text-purple-600"></i>
                                <span>إرشادات الامتثال التنظيمي</span>
                            </h3>
                            <div class="space-y-2">
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <i class="fas fa-check-circle text-purple-600 flex-shrink-0 mt-0.5"></i>
                                    <p class="text-purple-800 text-xs sm:text-sm md:text-base leading-relaxed">البيع المباشر لـ USDT FLASH محظور بموجب اللوائح</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <i class="fas fa-check-circle text-purple-600 flex-shrink-0 mt-0.5"></i>
                                    <p class="text-purple-800 text-xs sm:text-sm md:text-base leading-relaxed">استخدام إلزامي لعناوين محفظة Web3 الكاملة</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <i class="fas fa-check-circle text-purple-600 flex-shrink-0 mt-0.5"></i>
                                    <p class="text-purple-800 text-xs sm:text-sm md:text-base leading-relaxed break-words">المحافظ المعتمدة: MetaMask، Trust Wallet، Binance، Bybit، OKX</p>
                                </div>
                                <div class="flex items-start gap-2 sm:gap-3">
                                    <i class="fas fa-check-circle text-purple-600 flex-shrink-0 mt-0.5"></i>
                                    <p class="text-purple-800 text-xs sm:text-sm md:text-base leading-relaxed">فترة تسوية إلزامية مدتها 24 ساعة بعد التحويل</p>
                                </div>
                            </div>
                            <div class="mt-3 sm:mt-4 p-2 sm:p-3 bg-purple-100 rounded-lg">
                                <p class="text-xs sm:text-sm text-purple-700 font-medium">
                                    <i class="fas fa-info-circle ml-2"></i>
                                    <span>تضمن هذه الإرشادات الامتثال التنظيمي الكامل وحماية المستخدم</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    switchLanguage(lang) {
        this.currentLang = lang;
        const enBtn = document.getElementById('lang-en');
        const arBtn = document.getElementById('lang-ar');
        const enContent = document.getElementById('content-en');
        const arContent = document.getElementById('content-ar');

        if (lang === 'en') {
            enBtn.className = 'px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all bg-gradient-to-r from-blue-600 to-green-600 text-white min-w-[50px] sm:min-w-[60px] touch-manipulation';
            arBtn.className = 'px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all text-gray-600 hover:bg-gray-100 min-w-[50px] sm:min-w-[60px] touch-manipulation';
            enContent.classList.remove('hidden');
            arContent.classList.add('hidden');
            document.getElementById('certification-text').textContent = 'Certified & Regulated Service';
            document.getElementById('license-text').textContent = 'License: TET-2024-FLASH-001 | Compliance ID: USDT-AUTH-2024';
            document.getElementById('understand-btn').textContent = 'I Acknowledge & Proceed';
        } else {
            arBtn.className = 'px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all bg-gradient-to-r from-blue-600 to-green-600 text-white min-w-[50px] sm:min-w-[60px] touch-manipulation';
            enBtn.className = 'px-4 py-2 rounded text-xs sm:text-sm font-medium transition-all text-gray-600 hover:bg-gray-100 min-w-[50px] sm:min-w-[60px] touch-manipulation';
            arContent.classList.remove('hidden');
            enContent.classList.add('hidden');
            document.getElementById('certification-text').textContent = 'خدمة معتمدة ومنظمة';
            document.getElementById('license-text').textContent = 'الترخيص: TET-2024-FLASH-001 | رقم الامتثال: USDT-AUTH-2024';
            document.getElementById('understand-btn').textContent = 'أقر وأوافق على المتابعة';
        }
    }

    showModal() {
        const modal = document.getElementById('how-it-works-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            // Prevent zoom on double tap for iOS
            document.addEventListener('touchstart', this.preventZoom, { passive: false });
        }
    }

    preventZoom(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }

    closeModal() {
        const modal = document.getElementById('how-it-works-modal');
        if (modal) {
            modal.remove();
            document.body.style.overflow = 'auto';
            document.removeEventListener('touchstart', this.preventZoom);
        }
    }
}

// Initialize modal when script loads
let howItWorksModal;
document.addEventListener('DOMContentLoaded', function() {
    // Only show on payment pages
    if (window.location.pathname.includes('payment-')) {
        howItWorksModal = new HowItWorksModal();
    }
});