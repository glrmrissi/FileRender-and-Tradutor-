let showOpen2 = document.querySelector('.open')
let openTheme = document.querySelector('.theme-open')

function show() {
  showOpen2.classList.toggle('acti')
}

let flagOpen = document.querySelector(".flag_open")

function flagShow () {
    flagOpen.classList.toggle('showFlag')
}

const translate = {
  pt: {
    home: "Inicio", 
    learn: "Lendo",
    theme: "Tema",
    more: "Mais"
  }, 
  ja: {
    home: "ホーム", 
    learn: "ラーニング",
    theme: "テーマ",
    more: "モア"
  },
  en: {
    home: "Home", 
    learn: "Learning",
    theme: "Theme",
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


const imageForm = document.getElementById('imageForm');
const gallery = document.getElementById('gallery');

imageForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const imageInput = document.getElementById('imageInput');
    const imageTitle = document.getElementById('imageTitle').value;
    const file = imageInput.files[0];
    
    if (file) {
        const reader = new FileReader()

        reader.onload = function () {
            const image = document.createElement('img')
            image.src = reader.result
            image.alt = imageTitle

            const title = document.createElement('h3')
            title.textContent = imageTitle
            title.style.color = "#fff"

            const imageCard = document.createElement('div')
            imageCard.classList.add('image-card')
            imageCard.appendChild(image)
            imageCard.appendChild(title)
            imageCard.style.display = "inline-block"

            gallery.appendChild(imageCard)
        }

        reader.readAsDataURL(file)
        imageForm.reset()
    }
});


function showTheme () {
  openTheme.classList.toggle('act')
}