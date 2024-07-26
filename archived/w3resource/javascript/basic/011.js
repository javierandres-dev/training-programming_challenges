/*
11. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32
}
console.info(celsiusToFahrenheit(60))
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9)
}
console.log(fahrenheitToCelsius(45))