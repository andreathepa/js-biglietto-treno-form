// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

let button = document.getElementById('invia');

button.addEventListener('click', function(){

    let km = parseInt(document.getElementById('km').value);
   
    let age = parseInt(document.getElementById('age').value);

    let price = km * 0.21;

    let message = '';

    if (age === 0){
        message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
        discount_perc = '/';
    }
    else if (age === 1){
        price *= 0.8;
        discount_perc = '20%';

        message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
    }
    else{
        price *= 0.6;
        discount_perc = '40%';

        message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
    }

    document.getElementById('price').innerText = message;


})