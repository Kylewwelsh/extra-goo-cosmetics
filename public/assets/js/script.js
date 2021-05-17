const hamIcon = document.querySelector('.hamIcon')
const xIcon = document.querySelector('.xIcon')
const hamOptions = document.querySelector('.hamOptions')

hamIcon.addEventListener (
  'click', () => {
    hamIcon.classList.add('hide')
    xIcon.classList.add('unhide')
    hamOptions.classList.add('hamOptionsShow')
  }
)

xIcon.addEventListener (
  'click', () => {
    xIcon.classList.remove('unhide')
    hamIcon.classList.remove('hide')
    hamOptions.classList.remove('hamOptionsShow')
  }
)