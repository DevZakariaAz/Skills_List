// Calculate the sum of all elements in an array
function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr)); // Output: 15