let getal1 = parseInt(prompt("Voer getal 1 in: "));
// een eerste getal vragen aan de gebruiker
let getal2 = parseInt(prompt("Voer getal 2 in: "));
// een tweede getal vragen aan de gebruiker
let getal3 = parseInt(prompt("Voer getal 3 in: "));
// een derde getal vragen aan de gebruiker

if(getal1 >= getal2 && getal1 >= getal3){
    console.log(`${getal1} is de grootste`)
}else if(getal2 >= getal1 && getal2>= getal3){
    console.log(`${getal2} is de grootste`)
}else{
    console.log(`${getal3} is de grootste`)
    }

console.log(`Het grootste getal van 3 getallen is ${grootste}`);
