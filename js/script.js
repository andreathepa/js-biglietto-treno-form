// km da percorrere ed età

// let kmtodo = parseInt(prompt('Quanti km vuoi percorrere?').trim());
// console.log(kmtodo)

// let age = parseInt(prompt('Quanti anni hai?').trim());
// console.log(age)



//variabili

// const price = 0.21

// let ticket_price = (kmtodo * price);

// let sconto_young;

// let prezzo_young;

// let sconto_over;

// let prezzo_over;


// // condizioni

// if (age <18) {
//     sconto_young = (ticket_price * 20 / 100);
//     prezzo_young = (ticket_price - sconto_young);
//     tot_young = prezzo_young.toFixed(2) + '€';
//     message = `Il prezzo del tuo biglietto è di : ${tot_young}`
//     // console.log(message)
//     // document.getElementById('ticket').innerHTML= tot_young;


// } else if (age >= 65) {
//     sconto_over = (ticket_price * 40 / 100);
//     prezzo_over = (ticket_price - sconto_over);
//     tot_over = prezzo_over.toFixed(2) + '€';
//     message = `Il prezzo del tuo biglietto è di : ${tot_over}`
//     // document.getElementById('ticket').innerHTML= tot_over;


// } else {
//     tot_ticket = ticket_price.toFixed(2) + '€';
//     message = `Il prezzo del tuo biglietto è di : ${ticket_price}`

//     // document.getElementById('ticket').innerHTML= tot_ticket;

// }

// document.getElementById('message').innerHTML= message;


let button = document.getElementById('bottone');
button.addEventListener('click', function(){
    let input_name = document.getElementById('km').value;
    console.log(input_name);
    let input_name = document.getElementById('age').value;    
})


