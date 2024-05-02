'use strict'


let numberComputer = Math.round(Math.random() * 6);
let numberUtente = Math.round(Math.random() * 6);

if (numberComputer > numberUtente) {

    console.log('il computer ha vinto con il numero' + numberComputer);
}
else if (numberComputer < numberUtente) {

    console.log('hai vinto con il numero' + numberUtente);
}
else {
    console.log('mi spiace avete trovato lo stesso numero, volete riprovare?');
}



