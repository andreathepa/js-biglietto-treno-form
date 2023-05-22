"use strict"
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

let button = document.getElementById('invia');
document.getElementById('km').value = '';

button.addEventListener('click', function(){

    let km = parseInt(document.getElementById('km').value);
   
    let age = parseInt(document.getElementById('age').value);

    let name = document.getElementById('name').value;

    let discount_perc;

    let offerta;

    let carrozza;


    let price = km * 0.21;

    let message = '';

    if(isNaN(km) === false){

        if (age === 0){

            // message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
            discount_perc = '/';
            offerta = 'Standard';
            carrozza = '5';
        }
        else if (age === 1){
            discount_perc = '20%';
            price *= 0.8;
            offerta = 'Young';
            carrozza = '3';


            // message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
        }
        else{
            discount_perc = '40%';
            price *= 0.6;
            offerta = 'Over-65';
            carrozza = '1';


            // message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
        }

        document.getElementById('show-name').innerText = name;
        document.getElementById('show-offerta').innerText = offerta;
        document.getElementById('show-carrozza').innerText = carrozza;
        document.getElementById('show-discount').innerText = discount_perc;
        document.getElementById('show-price').innerText = (price.toFixed(2)+'€');


    }
    else{
        message += 'Devi inserire i km da percorrere'
    }

});

//Button annulla


let button_annulla = document.getElementById('annulla');
button_annulla.addEventListener("click", function(){

    document.getElementById('show-name').innerText ='';

    document.getElementById('show-carrozza').innerText ='';

    document.getElementById('show-discount').innerText ='';

    document.getElementById('show-price').innerText ='';
})

