//creamo una variabile stringa e prede valore di utente
let parolains = prompt("Inserisci parola:");
let isPal = epalindrom(parolains); //chiama funzione
console.log(isPal);
if(isPal) //stampa in html se e palindrom o no
document.writeln("Il parrola "+parolains+" e palindrom.\n");
else
document.writeln("Il parrola "+parolains+" non e palindrom.\n");

//pari o dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
let numu=0;
let pdnum = prompt("Per pari inserisci 0 per dispari 1");
if(pdnum==0 || pdnum==1){
    numu = prompt("Inscerisci numero per giocare con PC:");
}












// funzione che verifica se una parola e parindroma o no
function epalindrom(parola){
    let n = parola.length;
    for (let i = 0; i < n / 2; i++) {  
        // validate the first and last characters are the same  
        if (parola[i] !== parola[n - 1 - i]) {  //sta guardando il indice di  prima i ultima sonno  iguali o diversi lettere e avanti cosi fin che non le passa tutti
          return false;
        } 
    }  
    return true;
}