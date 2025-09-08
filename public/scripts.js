const body = document.querySelector('body')
const theme = document.querySelector('.change-theme')
const font = document.querySelector('.change-font')

let oldTheme = 'palette-1'
let oldFont = 'font-1'


document.querySelectorAll('.change-theme input[name="palette"]').forEach(radio => {
    radio.addEventListener('change', () => {
        let newTheme = radio.id
        body.classList.remove(oldTheme)
        body.classList.add(newTheme)
        oldTheme = newTheme
    })
})

theme.removeAttribute('hidden')

document.querySelectorAll('.change-font input[name="font"]').forEach(radio => {
    radio.addEventListener('change', () => {
        let newFont = radio.id
        body.classList.remove(oldFont)
        body.classList.add(newFont)
        oldFont = newFont
    })
})

font.removeAttribute('hidden')
