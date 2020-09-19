// this declares a variable 293 for kelvin
const kelvin = 293;

/* this line below declares that celsius is kelvin when you subtract 273. */
const celsius = kelvin - 273;

/* use let here instead of const because the goal of our program is to get fahrenheit. Therfore the variables set to fahrenheit will change, so we use let instead of const. */ 
let fahrenheit = celsius * (9/5) + 32;

/* since we used let in the code above we can now use Math.floor to round down to the nearest whole number. I always make a mistake with the syntax of Math.floor. It needs to go outside of parenthesis and whatever you need to round down goes inside of the Math.floor parenthesis. */
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//Extra work and conversion to newton scale below
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);