'use strict'

let mail = ['simone@gmail.com', 'giuseppe@gmail.com', 'daniele@gmail.com', 'francesco@gmail.com', 'edoardo@gmail.com', 'roberto@gmail.com', 'angelo@gmail.com', 'gianni@gmail.com', 'davide@gmail.com', 'lorenzo@gmail.com', 'mauro@gmail.com', 'marco@gmail.com',]

let emailSelection = prompt('inserisci la tua email').toLowerCase();

// variabile flag
let isEmailValid = false;
// loop for
for (let i = 0; i < mail.length; i++) {
    //console.log(mail[i]);

    if (mail[i] === emailSelection) {
        isEmailValid = true;
    }
}


//check
if (isEmailValid === true) {
    console.log('hai inserito correttamente la tua email')
}
else {
    console.log('hai inserito una email non presente nella lista')
}






