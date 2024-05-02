'use strict'

const mail = ['simone@gmail.com', 'giuseppe@gmail.com', 'daniele@gmail.com', 'francesco@gmail.com', 'edoardo@gmail.com', 'roberto@gmail.com', 'angelo@gmail.com', 'gianni@gmail.com', 'davide@gmail.com', 'lorenzo@gmail.com', 'mauro@gmail.com', 'marco@gmail.com',]

console.log(mail)

let emailSelection = prompt('inserisci la tua email')
emailSelection = ('')


if (emailSelection === emailSelection) {
    console.log('hai inserito correttamente la tua email')
}
else if (emailSelection === '') {
    console.log('non hai inserito alcuna email!')
}
else {
    console.log('hai inserito una email non presente nella lista')
}