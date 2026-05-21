const translations = {
    'ua': { 
        'home': 'Головна', 
        'about': 'Про автора', 
        'collections': 'Колекції', 
        'auto': 'Auto Series', 
        'yacht': 'Yacht Series', 
        'footer': '© 2026 KOVALART STORE. УСІ ПРАВА ЗАХИЩЕНІ.' 
    },
    'en': { 
        'home': 'Home', 
        'about': 'About', 
        'collections': 'Collections', 
        'auto': 'Auto Series', 
        'yacht': 'Yacht Series', 
        'footer': '© 2026 KOVALART STORE. ALL RIGHTS RESERVED.' 
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}