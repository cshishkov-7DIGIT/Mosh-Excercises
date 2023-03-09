const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const count = countOccurrences(numbers, 1);
console.log(count);

function countOccurrences(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error('Invalid array.');
    }
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

