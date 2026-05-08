function switchLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        el.textContent = translations[lang][key];
    });

    document.querySelectorAll('.lang-button').forEach(button => {
        button.classList.remove('active');

        const buttonLang = button.textContent.trim().toLowerCase();

        if (buttonLang === lang) {
            button.classList.add('active');
        }
    });

    commandText = ' ' + translations[lang].thanksCommand;
    resetTypingAnimation();

    localStorage.setItem('lang', lang);
}

fetch('./docs/locale/translations.json')
  .then(res => res.json())
  .then(data => {
      window.translations = data;

      const savedLang = localStorage.getItem('lang') || 'pt';
      switchLanguage(savedLang);
  });

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.1s';
        }
    });
});

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

const commandElement = document.querySelector('.command-line');

let commandText = '';
let currentText = '';
let index = 0;

function typeCommand() {
    if (index < commandText.length) {
        currentText += commandText[index];
        commandElement.innerHTML = currentText + '<span class="cursor"></span>';
        index++;
        setTimeout(typeCommand, 50);
    }
}

function resetTypingAnimation() {
    currentText = commandElement.innerHTML.split('$')[0] + '$';
    index = 0;
    typeCommand();
}