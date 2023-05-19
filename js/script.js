// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

let button = document.getElementById('invia');
document.getElementById('km').value = '';

button.addEventListener('click', function(){

    let km = parseInt(document.getElementById('km').value);
   
    let age = parseInt(document.getElementById('age').value);

    let name = document.getElementById('name').value;

    let discount_perc;


    let price = km * 0.21;

    let message = '';

    if(isNaN(km) === false){

        if (age === 0){

            // message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
            discount_perc = '/';
        }
        else if (age === 1){
            discount_perc = '20%';
            price *= 0.8;


            // message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
        }
        else{
            discount_perc = '40%';
            price *= 0.6;


            // message += `Il prezzo del biglietto è di: ${price.toFixed(2)}€`;
        }

        document.getElementById('show-name').innerText = name;
        document.getElementById('show-km').innerText = km;
        document.getElementById('show-age').innerText = age;
        document.getElementById('show-discount').innerText = discount_perc;
        document.getElementById('show-price').innerText = price;


    }
    else{
        message += 'Devi inserire i km da percorrere'
    }

    

    document.getElementById('price').innerText = message;


});