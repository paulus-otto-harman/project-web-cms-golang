const page = {
    tagline:'',
    skills:[],
    experiences:[],
    contact:{},
    about:''
}

const modal = document.getElementById('modal')
const btnPreview = document.getElementById('btn-preview')
const btnClose = document.getElementById('btn-close')
const previewBox = document.querySelector('object')

window.onhashchange = function() {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => section.classList.add('hidden'))
    const section = document.querySelector(location.hash)
    section.classList.remove('hidden')
}

btnPreview.addEventListener('click', event => {
    event.preventDefault()
    show('modal')
    localStorage.setItem('profile', JSON.stringify(page))
})

btnClose.addEventListener('click', event=>{
    event.preventDefault()
    hide('modal')
})

function hide(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}

function show(elementId) {
    const element = document.getElementById(elementId)
    element.classList.remove(['hidden'])
}