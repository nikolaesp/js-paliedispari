//creamo una variabile stringa e prede valore di utente
let parolains = prompt("Inserisci parola:");
let isPal = ePalindrom(parolains); //chiama funzione
console.log(isPal);
if (isPal) //stampa in html se e palindrom o no
    document.writeln("Il parrola " + parolains + " e palindrom.\n");
else
    document.writeln("Il parrola " + parolains + " non e palindrom.\n");

//pari o dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let numu = 0;
let somma = 0;
let pdnum = parseInt(prompt("Per pari inserisci 0 per dispari 1"));
if (pdnum == 0 || pdnum == 1) {
    numu = parseInt(prompt("Inscerisci numero per giocare con PC:"));
}
//Generiamo un numero random (sempre da 1 a 5) per il computer
let rnumpc = Math.floor((Math.random() * 5) + 1);

if (numu > 0 && numu < 6) {
    somma = numu + rnumpc;
}else{
    document.writeln("Inserito numero non valido");
}
//Stabiliamo se la somma dei due numeri è pari o dispari
let pn = pari(somma);
//Dichiariamo chi ha vinto.
if(pn){
    if(pdnum == 0)
    document.writeln("Hai Vinto !!!");
    else
    document.writeln("Hai perso !!!");
}else{
    if(pdnum == 1)
    document.writeln("Hai Vinto !!!");
    else
    document.writeln("Hai perso !!!");
}





//funzione e paro o disparo
function pari(num){
    if(num%2==0)
    return true;
    else
    return false;

}


// funzione che verifica se una parola e parindroma o no
function ePalindrom(parola) {
    let n = parola.length;
    for (let i = 0; i < n / 2; i++) {
        // validate the first and last characters are the same  
        if (parola[i] !== parola[n - 1 - i]) {  //sta guardando il indice di  prima i ultima sonno  iguali o diversi lettere e avanti cosi fin che non le passa tutti
            return false;
        }
    }
    return true;
}