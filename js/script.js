let showOpen2 = document.querySelector('.open')

function show() {
  showOpen2.classList.toggle('active')
}

let flagOpen = document.querySelector(".flag_open")

function flagShow () {
    flagOpen.classList.toggle('showFlag')
}

const translate = {
  pt: {
    home: "Inicio", 
    learn: "Lendo",
    more: "Mais"
  }, 
  ja: {
    home: "ホーム", 
    learn: "ラーニング",
    more: "モア"
  },
  en: {
    home: "Home", 
    learn: "Learning",
    more: "More"
  }
}

function changeLanguage(language) {
  const elements = document.querySelectorAll('[data-translate]')

  for (const element of elements) {
    const key = element.getAttribute('data-translate')
    element.textContent = translate[language][key]
  }
}

document.getElementById('ptLang').addEventListener('click', () => changeLanguage('pt'));
document.getElementById('jaLang').addEventListener('click', () => changeLanguage('ja'));
document.getElementById('usaLang').addEventListener('click', () => changeLanguage('en'));