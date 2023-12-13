//* Copy Array Items Using slice()

//? We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the string elements warm and sunny.

// slice() => extracts a given number of elements into a new array
// slice() => takes the parameters
// first parameter determines from where the extertion begins
// second parameter => indicates upto which element to be extracted not including the element at this index

// extract only Mercedes to Ford
let cars = ["Toyota", "Mercedes-Benz", "BMW", "Ford", "Chevrolet"];
let onlyThreeCars = cars.slice(1, 4);
console.log(onlyThreeCars);
