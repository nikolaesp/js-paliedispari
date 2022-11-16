//creamo una variabile stringa e prede valore di utente
let parolains = prompt("Inserisci parola:");
let isPal = epalindrom(parolains); //chiama funzione
console.log(isPal);
if(isPal) //stampa in html se e palindrom o no
document.writeln("Il parrola "+parolains+" e palindrom.");
else
document.writeln("Il parrola "+parolains+" non e palindrom.");











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