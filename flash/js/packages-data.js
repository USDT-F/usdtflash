// Tether Official USDT Packages - Professional Edition
const packagesData = {
    basic: {
        // Starter Package - Tether Verified
        name: "Trial Package",
        arabicName: "Trial Package",
        subtitle: "⚡ LIMITED TIME - 87% OFF!",
        price: "$49.99",
        originalPrice: "$59.99",
        amount: "500 USDT FLASH",
        usdtAmount: "500",
        delivery: "⚡ INSTANT (2-5 minutes)",
        
        // Psychological Features
        features: [
            "🎯 500 USDT Instant Transfer (GUARANTEED)",
            "🔥 EXCLUSIVE: Only 47 spots left today!",
            "💎 Tether Treasury Backed (VERIFIED)",
            "🏆 Used by 50,000+ satisfied customers",
            "⚡ INSTANT activation in 2-5 minutes",
            "🛡️ 100% Money-Back Guarantee",
            "🎁 BONUS: Free VIP support for life",
            "📈 Average user profit: $2,847 in first week"
        ],
        
        // Urgency Colors
        color: {
            primary: "red-600",
            bg: "red-50",
            border: "red-200",
            gradient: "from-red-500 to-orange-600"
        },
        
        // Urgency Icon
        icon: "fas fa-rocket",
        
        // Psychological Button
        button: {
            text: "🔥 CLAIM YOUR SPOT NOW",
            class: "from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700 animate-pulse"
        },
        
        // Social Proof Benefits
        bonus: {
            title: "🎉 EXCLUSIVE Trial Benefits:",
            items: [
                "✅ Join 50,000+ successful users",
                "🎁 FREE $200 bonus credit included",
                "⚡ INSTANT access (no waiting)",
                "🏆 VIP priority support",
                "💰 Average ROI: 347% in first month"
            ]
        },
        
        // Trust Signals
        verification: {
            badge: "🔥 TRENDING #1 CHOICE",
            license: "✅ 50,000+ Active Users",
            compliance: "⭐ 4.9/5 Rating (12,847 reviews)"
        },
        
        // Psychological Triggers
        urgency: {
            timer: "⏰ Offer expires in 23:47:12",
            scarcity: "🚨 Only 47 spots remaining today",
            social: "👥 2,847 people viewing this offer",
            fomo: "💸 Don't miss out - prices increase tomorrow!"
        },
        
        // Special Properties
        mostPopular: true,
        trending: true,
        limitedOffer: true,
        instantAccess: true
    },
    
    pro: {
        // Professional Package - Most Popular
        name: "Basic Package",
        arabicName: "Basic Package",
        subtitle: "Recommended by Tether",
        price: "$239",
        originalPrice: null,
        amount: "3,000 USDT FLASH",
        usdtAmount: "3,000",
        delivery: "1-3 minutes",
        
        // Enhanced Professional Features
        features: [
            "✅ 3,000 USDT Premium Allocation",
            "🏆 Tether Gold Member Status",
            "⚡ Priority Network Processing",
            "🔐 Advanced Security Suite",
            "📈 Professional Trading Tools",
            "💼 Dedicated Account Manager",
            "🎯 Market Analysis Reports",
            "🌟 VIP Customer Support",
            "📋 Compliance Documentation",
            "🔄 Unlimited Transfers"
        ],
        
        // Professional Colors
        color: {
            primary: "blue-600",
            bg: "blue-50",
            border: "blue-200",
            gradient: "from-blue-500 to-blue-700"
        },
        
        // Professional Icon
        icon: "fas fa-gem",
        
        // Professional Button
        button: {
            text: "Get Now",
            class: "from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800"
        },
        
        // Professional Benefits
        bonus: {
            title: "Professional Exclusive:",
            items: [
                "500 USDT Bonus Included",
                "Priority Support Channel",
                "Advanced Analytics Dashboard",
                "Market Intelligence Reports"
            ]
        },
        
        // Special Properties
        mostPopular: false,
        badge: "Professional Choice",
        aiSelected: false,
        
        // Professional Verification
        verification: {
            badge: "Tether Gold Certified",
            license: "License: TL-PRO-2024",
            compliance: "Premium Regulated"
        }
    },
    
    enterprise: {
        // Enterprise Package - Maximum Value
        name: "Professional Package",
        arabicName: "Professional Package",
        subtitle: "Tether Institutional Grade",
        price: "$319",
        originalPrice: null,
        amount: "10,000 USDT FLASH",
        usdtAmount: "10,000",
        delivery: "Instant",
        
        // Enterprise-Grade Features
        features: [
            "✅ 10,000 USDT Institutional Rate",
            "🏢 Tether Enterprise Partnership",
            "⚡ Instant Settlement Network",
            "🔒 Military-Grade Encryption",
            "📊 Advanced Analytics Platform",
            "👨‍💼 Personal Relationship Manager",
            "🌍 Global Liquidity Access",
            "📋 Full Regulatory Compliance",
            "🎯 Custom Integration Support",
            "💎 Exclusive Tether Benefits",
            "🔄 Unlimited Transaction Volume",
            "📞 Direct Tether Hotline"
        ],
        
        // Enterprise Colors
        color: {
            primary: "purple-600",
            bg: "purple-50",
            border: "purple-200",
            gradient: "from-purple-500 to-purple-700"
        },
        
        // Enterprise Icon
        icon: "fas fa-crown",
        
        // Enterprise Button
        button: {
            text: "Get Now",
            class: "from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
        },
        
        // Enterprise Benefits
        bonus: {
            title: "Enterprise Exclusive:",
            items: [
                "2,000 USDT Bonus Package",
                "Direct Tether Partnership",
                "Custom Integration Support",
                "Institutional Trading Access",
                "Regulatory Compliance Suite"
            ]
        },
        
        // Enterprise Verification
        verification: {
            badge: "Tether Enterprise Partner",
            license: "License: TL-ENT-2024",
            compliance: "Institutional Grade"
        }
    }
};

// Package Display Functions
function getPackageData(packageType) {
    return packagesData[packageType] || packagesData.basic;
}

function getAllPackages() {
    return packagesData;
}

// Package Price Calculation
function calculatePackagePrice(packageType, quantity = 1) {
    const pkg = getPackageData(packageType);
    const basePrice = parseInt(pkg.price.replace('$', ''));
    return basePrice * quantity;
}

// Package Comparison Functions
function comparePackages(packageType1, packageType2) {
    const pkg1 = getPackageData(packageType1);
    const pkg2 = getPackageData(packageType2);
    
    return {
        price: parseInt(pkg1.price.replace('$', '')) - parseInt(pkg2.price.replace('$', '')),
        features: pkg1.features.length - pkg2.features.length,
        delivery: pkg1.delivery.localeCompare(pkg2.delivery)
    };
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { packagesData, getPackageData, getAllPackages, calculatePackagePrice, comparePackages };
}
