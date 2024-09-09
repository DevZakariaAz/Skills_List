// this is the array we want to sort

let numbers = [4, 2, 0, 9];
let temps;
for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        // seconde boucle for pour comparer les nombres un par un
        if (numbers[i] < numbers[j]) {
            temps = numbers[i]
            numbers[i] = numbers[j]
            numbers[j] = temps
        }
    }
} 

console.log(numbers);    // [9, 4, 2, 0]