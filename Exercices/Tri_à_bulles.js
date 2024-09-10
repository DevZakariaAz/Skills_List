// Tri  a bulle
let numbers = [3, 5, 1, 0, 8];
let tmp;

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            tmp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = tmp;
        }
    }
}

console.log("Tableau trié:", numbers);