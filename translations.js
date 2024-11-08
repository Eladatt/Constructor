const translations = {
    en: {
        mainTitle: "The Magnificent Animated Colorful 6 Creatures",
        subtitle: "How to Anesthetize Them Safely",
        dragon: "Dragon",
        unicorn: "Unicorn",
        phoenix: "Phoenix",
        mermaid: "Mermaid",
        griffin: "Griffin",
        brain: "Brain",
        smallAnimations: "Small Animations",
        selectLanguage: "Select Language"
    },
    he: {
        mainTitle: "ששת היצורים המופלאים המונפשים והצבעוניים",
        subtitle: "כיצד להרדים אותם בבטחה",
        dragon: "דרקון",
        unicorn: "חד-קרן",
        phoenix: "עוף החול",
        mermaid: "בת ים",
        griffin: "גריפון",
        brain: "מוח",
        smallAnimations: "אנימציות קטנות",
        selectLanguage: "בחר שפה"
    },
    ar: {
        mainTitle: "المخلوقات الست الرائعة المتحركة والملونة",
        subtitle: "كيفية تخديرها بأمان",
        dragon: "تنين",
        unicorn: "أحادي القرن",
        phoenix: "العنقاء",
        mermaid: "حورية البحر",
        griffin: "جريفين",
        brain: "دماغ",
        smallAnimations: "رسوم متحركة صغيرة",
        selectLanguage: "اختر اللغة"
    },
    ru: {
        mainTitle: "Великолепные анимированные красочные 6 существ",
        subtitle: "Как безопасно их анестезировать",
        dragon: "Дракон",
        unicorn: "Единорог",
        phoenix: "Феникс",
        mermaid: "Русалка",
        griffin: "Грифон",
        brain: "Мозг",
        smallAnimations: "Маленькие анимации",
        selectLanguage: "Выберите язык"
    }
};

function updateTranslations(lang) {
    document.getElementById('main-title').textContent = translations[lang].mainTitle;
    document.getElementById('subtitle').textContent = translations[lang].subtitle;
    document.getElementById('lang-toggle').textContent = translations[lang].selectLanguage;

    const creatureButtons = document.querySelectorAll('#creature-nav button');
    creatureButtons.forEach(button => {
        button.textContent = translations[lang][button.dataset.creature];
    });

    const creatureTitles = document.querySelectorAll('.creature h2');
    creatureTitles.forEach(title => {
        title.textContent = translations[lang][title.parentElement.id];
    });

    document.querySelector('#small-animations h3').textContent = translations[lang].smallAnimations;
}
