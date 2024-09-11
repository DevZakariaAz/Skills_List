//* Remove duplicates from an array
function removeDuplicates(array) {
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

const arr = ["a", "b", "c", "d", "e", "f", "b", "j", "h", "a"];
console.log(removeDuplicates(arr));
//* ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h']