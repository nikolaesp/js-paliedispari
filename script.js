//creamo una variabile stringa e prede valore di utente
let parolains = prompt("Inserisci parola:");
let isPal = epalindrom(parolains); //chiama funzione
console.log(isPal);












// funzione che verifica se una parola e parindroma o no
function epalindrom(parola){
    let n = parola.length;
    for (let i = 0; i < n / 2; i++) {  
        // validate the first and last characters are the same  
        if (parola[i] !== parola[len - 1 - i]) {  
          return false;
        } 
    }  
    return true;
}