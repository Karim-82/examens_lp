let celsius = 20;
let fahrenheit = (celsius * 9/5) + 32;


if (celsius < 15) {
   console.log("frisjes") ;
} else if (celsius >= 15 && celsius <= 25) {
    console.log("aangenaam");
} else {
    console.log("te warm");
}

console.log(`${celsius} graden Celsius is ${fahrenheit});
