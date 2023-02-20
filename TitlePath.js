let prevTitle = document.title

window.addEventListener('blur', () => {
    prevTitle = document.title
    document.title = 'No te vayas 😢😢, regresa!!'
})

window.addEventListener('focus', () => {
    prevTitle = document.title
    document.title = prevTitle
}) 