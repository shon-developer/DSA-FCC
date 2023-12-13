//* Remove Items Using splice()

//? We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.

// splice() => removes any number of consecutive elements from the array
// splice takes three parameters
// first one => index number from where the removal starts
// second => how many elements to remove

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
arr.splice(1, 4);
// Only change code above this line
console.log(arr);
