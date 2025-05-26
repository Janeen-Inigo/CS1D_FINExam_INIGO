let numbers = [24,65,21,5,9,32,42,80,57];
let names = ["Zenvo","Erica","Jordie","Alicia","Redon"];

let combined = [numbers,names];
console.log("Combined array:",combined);

// Sorting numbers in reverse order
let sortedNumbers = [numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse:", sortedNumbers);

// Sorting names alphabetically
let sortedNames = [names].sort();
console.log("Names Sorted Alphabetically:", sortedNames);