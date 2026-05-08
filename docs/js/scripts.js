
const translations = {
  pt: {
    terminalTitle: "portfolio.dev — bash — 80x24",

    aboutme: "Sobre mim",
    nameLabel: "Nome",
    name: "Pedro Augusto Gomes",
    formationLabel: "formação",
    formation1: "FATEC Jacareí\nDesenvolvimento de Software Multiplataforma (DSM)\nago de 2025 - presente",
    anotherFormation: "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP\nCurso Técnico Integrado, Informática\njan de 2020 – dez de 2023",
    yearLabel: "idade",
    age: "20 anos",
    bioLabel: "bio",
    bioText: "Desenvolvedor de software com 2 anos de experiência, apaixonado por tecnologia e aprendizado contínuo. Atualmente cursando Desenvolvimento de Software Multiplataforma na FATEC Jacareí, aprofundando conhecimentos em Python, React e TypeScript. Tenho experiência sólida com Git/GitHub, SQL, JavaScript e desenvolvimento web no geral, sempre buscando escrever código limpo e entregar soluções eficientes. Pratico metodologias ágeis como Scrum no dia a dia e me adapto bem a novos desafios e ambientes. Proativo, comunicativo e com inglês avançado — pronto para colaborar em projetos que façam a diferença.",

    welcomeMessage: "Bem-vindo ao meu portfólio!",

    projectsTitle: "ls -la ~/projects",
    academic: "ACADÊMICO",
    professional: "PROFISSIONAL",
    personal: "PESSOAL",

    project1Title: "AgriRS Lab",
    project1Desc: "Desenvolvimento de um website para centralizar e divulgar as informações do Laboratório de Sensoriamento Remoto Agrícola do INPE, promovendo maior visibilidade às pesquisas, projetos e iniciativas desenvolvidas pelo laboratório. O site apresenta uma interface moderna e responsiva, facilitando o acesso a conteúdos relevantes para pesquisadores, estudantes e interessados na área de sensoriamento remoto agrícola.",

    project2Title: "Autoatendimento da Secretaria Acadêmica da Fatec Jacareí",
    project2Desc: "O projeto consiste no desenvolvimento de uma aplicação web de autoatendimento baseada em um chatbot conversacional, com o objetivo de auxiliar alunos e interessados externos nas principais dúvidas relacionadas à secretaria acadêmica da Fatec Jacareí. A plataforma permitirá consultas diretas e navegação guiada por menus estruturados, fornecendo respostas objetivas, padronizadas e verificáveis sobre temas como calendário acadêmico, horários de aulas, estágio supervisionado, dispensa de disciplinas e estrutura curricular dos cursos. Além disso, o sistema apresentará evidências extraídas de documentos oficiais, como regulamentos e manuais institucionais, garantindo maior confiabilidade nas informações e reduzindo a sobrecarga operacional da secretaria acadêmica.",

    skillsTitle: "cat ~/skills-and-contact.json",
    skillsSubtitle: "// Habilidades Técnicas",
    contactSubtitle: "// Contato",

    advanced: "Avançado",
    intermediate: "Intermediário",

    thanksCommand: "echo \"Obrigado pela visita!\"",

    locationlabel: "Localização",

    rights: "Todos os direitos reservados",

    GitButton: "Ver no GitHub",
    languageslabel: "Idiomas",
    languages: "Português (nativo), Inglês (avançado)"
  },

  en: {
    terminalTitle: "portfolio.dev — bash — 80x24",

    aboutme: "About me",
    nameLabel: "Name",
    name: "Pedro Augusto Gomes",
    formationLabel: "education",
    formation1: "FATEC Jacareí\nMultiplatform Software Development (DSM)\nAug 2025 - present",
    anotherFormation: "Federal Institute of Education, Science and Technology of São Paulo - IFSP\nIntegrated Technical Course, Information Technology\nJan 2020 – Dec 2023",
    yearLabel: "age",
    age: "20 years old",
    bioLabel: "bio",
    bioText: "Software developer with 2 years of experience, passionate about technology and continuous learning. Currently studying Multiplatform Software Development at FATEC Jacareí, deepening knowledge in Python, React, and TypeScript. I have solid experience with Git/GitHub, SQL, JavaScript, and web development in general, always striving to write clean code and deliver efficient solutions. I work with agile methodologies such as Scrum on a daily basis and adapt well to new challenges and environments. Proactive, communicative, and with advanced English skills — ready to collaborate on projects that make a difference.",

    welcomeMessage: "Welcome to my portfolio!",

    projectsTitle: "ls -la ~/projects",
    academic: "ACADEMIC",
    professional: "PROFESSIONAL",
    personal: "PERSONAL",

    project1Title: "AgriRS Lab",
    project1Desc: "Development of a website to centralize and share information from INPE's Agricultural Remote Sensing Laboratory, increasing the visibility of the laboratory's research, projects, and initiatives. The website features a modern and responsive interface, making access to relevant content easier for researchers, students, and people interested in agricultural remote sensing.",

    project2Title: "Fatec Academic Office Self-Service",
    project2Desc: "The project consists of developing a self-service web application based on a conversational chatbot, aimed at assisting students and external users with the main questions related to Fatec Jacareí's academic office. The platform allows direct queries and guided navigation through structured menus, providing objective, standardized, and verifiable answers on topics such as academic calendar, class schedules, supervised internships, subject exemptions, and course curriculum structure. In addition, the system presents evidence extracted from official documents, such as institutional regulations and manuals, ensuring greater reliability of information and reducing the operational workload of the academic office.",

    skillsTitle: "cat ~/skills-and-contact.json",
    skillsSubtitle: "// Technical Skills",
    contactSubtitle: "// Contact",

    advanced: "Advanced",
    intermediate: "Intermediate",

    thanksCommand: "echo \"Thanks for visiting!\"",

    locationlabel: "Location",

    rights: "All rights reserved",

    GitButton: "View on GitHub",
    languageslabel: "Languages",
    languages: "Portuguese (native), English (advanced)"
  }
};

window.translations = translations;


function switchLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');

        const value = translations?.[lang]?.[key];
        if (value !== undefined) {
            el.textContent = value;
        }
    });

    document.querySelectorAll('.lang-button').forEach(button => {
        button.classList.remove('active');

        if (button.textContent.trim().toLowerCase() === lang) {
            button.classList.add('active');
        }
    });

    commandText = ' ' + translations[lang].thanksCommand;
    resetTypingAnimation();

    localStorage.setItem('lang', lang);
}


const savedLang = localStorage.getItem('lang') || 'pt';
switchLanguage(savedLang);

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
        commandElement.innerHTML =
            currentText + '<span class="cursor"></span>';

        index++;
        setTimeout(typeCommand, 50);
    }
}

function resetTypingAnimation() {
    currentText = '<span class="prompt">pedro@portfolio:~$</span>';
    commandElement.innerHTML = currentText;

    index = 0;
    setTimeout(typeCommand, 300);
}