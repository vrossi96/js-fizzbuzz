console.log('OK JS');

/*

Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
BONUS:
Provare a stampare la lista in pagina invece che in console


Passi

1- creare programma con cicli da 1 a 100 con for
  1a- SE il numero è multiplo di 3 allora Fizz
  1b- SE il numero è multiplo di 5 allora Buzz
  1c- SE il numero è multiplo di 3 e 5 allora FizzBuzz

*/

const container = document.getElementById('numbers');
let number = '';

// Calcolo ciclo da 1 a 100
for (let i = 1; i <= 100; i++) {
  // Se il numero non è multiplo di 3 e 4 viene stampato
  if (!(i % 3 == 0) && !(i % 5 == 0)) {
    console.log('Numero: ', i);
    number += `<li>${i}</li>`;
  }
  // Se il numero nel ciclo è divisibile sia per 3 e 5 e da resto 0 ad entrambi allora FizzBuzz!
  else if ((i % 3 == 0) && (i % 5 == 0)){
    console.log(`FizzBuzz!`, i);
    number += `<li><span class="fizz">Fizz</span><span class="buzz">Buzz</span></li>`;
  }
  // Se il numero nel ciclo è divisibile per 3 e da resto 0 allora Fizz!
  else if (i % 3 == 0){
    console.log(`Fizz!`, i);
    number += `<li class="fizz">Fizz</li>`;
  }
  // Se il numero nel ciclo è divisibile per 5 e da resto 0 allora Buzz!
  else if (i % 5 == 0){
    console.log(`Buzz!`, i);
    number += `<li class="buzz">Buzz</li>`;
  }
}

container.innerHTML = number;
