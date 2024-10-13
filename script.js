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

btnPreview.addEventListener('click', event => {
    event.preventDefault()
    show('modal')
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