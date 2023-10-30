/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const explanationForKids = "I differenti datatype in Javascript sono numeri, stringhe e valori booleani. I numeri, come dice la parola stessa, sono fatti da cifre. Possiamo usarli per fare operazioni matematiche utilizzando i tradizionali operatori +, -, *, / e altri. Le stringhe, sono parole, frasi, qualunque valore, in fase di assegnazione, io racchiuda tra apici o doppi apici (per esempio 'Mario' è una stringa). Un valore booleano è un valore che corrisponde a vero o falso. E' contraddistinto dalle keyword 'true' (vero) e 'false' (falso). E' normalmente usato per verificare condizioni che ci serviranno in futuro a determinare il comportamento procedurale dell'algoritmo che andremo scrivendo. Per esempio in caso di if statement o di while loops.";

const requirementsForUnderstanding = "\nIl bambino che legge la spiegazione sopra deve avere un QI minimo di 180. Grazie";

console.log(explanationForKids + requirementsForUnderstanding);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name = "Matteo";
console.log(name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = 12;
const num2 = 20;
const result = num1 + num2;
console.log(result);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// name = "Falco";
console.log(name);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let subtraction = 4 - x;
console.log(subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log(name1===name2);
console.log(name1.toLowerCase()===name2.toLowerCase());

/* ESERCIZIO EXTRA
  Crea un convertitore Fahrenheit-Celsius che
  utilizzi un input utente in Fahrenheit per
  ritornare la temperatura in Celsius
*/

let celsiusTemp = prompt ("Inserisci una temperatura in gradi Celsius");
let fahrenheitTemp = ((celsiusTemp) * 9/5)+32;
window.alert("La tua temperatura in Fahrenheit è: " + fahrenheitTemp);
console.log(fahrenheitTemp);